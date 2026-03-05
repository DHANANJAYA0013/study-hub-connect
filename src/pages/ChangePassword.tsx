import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { changePassword } from "@/services/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/components/lms/Header";
import { useToast } from "@/hooks/use-toast";
import {
  Loader2,
  ArrowLeft,
  Eye,
  EyeOff,
  KeyRound,
  CheckCircle2,
} from "lucide-react";
import { z } from "zod";

const schema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z
      .string()
      .min(6, "New password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Please confirm your new password"),
  })
  .refine((d) => d.newPassword === d.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .refine((d) => d.currentPassword !== d.newPassword, {
    message: "New password must be different from the current password",
    path: ["newPassword"],
  });

type FormErrors = {
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
};

/* ---- Defined outside component so React doesn't remount on every render ---- */
interface PasswordInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  show: boolean;
  onToggle: () => void;
  placeholder: string;
  error?: string;
  onClearError: (id: string) => void;
}

function PasswordInput({
  id,
  label,
  value,
  onChange,
  show,
  onToggle,
  placeholder,
  error,
  onClearError,
}: PasswordInputProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="relative mt-1">
        <Input
          id={id}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            if (error) onClearError(id);
          }}
          className="pr-10"
        />
        <button
          type="button"
          onClick={onToggle}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          tabIndex={-1}
        >
          {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}

export default function ChangePassword() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [done, setDone] = useState(false);

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  /* Redirect unauthenticated users */
  if (!authLoading && !user) {
    navigate("/signin");
    return null;
  }

  const validate = () => {
    const result = schema.safeParse({ currentPassword, newPassword, confirmPassword });
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormErrors;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    const { error } = await changePassword(currentPassword, newPassword);
    setIsLoading(false);

    if (error) {
      toast({
        variant: "destructive",
        title: "Password change failed",
        description: error,
      });
    } else {
      setDone(true);
      toast({
        title: "Password updated successfully!",
        description: "Your password has been changed.",
      });
    }
  };

  const clearError = (id: string) => {
    setErrors((prev) => ({ ...prev, [id]: undefined }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container flex items-start justify-center py-10 px-4">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="text-center">
            <div className="flex items-center justify-between mb-3">
              <button
                onClick={() => navigate(-1)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-primary">
                <KeyRound className="h-6 w-6 sm:h-7 sm:w-7 text-primary-foreground" />
              </div>
              <div className="w-4 sm:w-5" />
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold">Change Password</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Enter your current password and choose a new one.
            </CardDescription>
          </CardHeader>

          <CardContent>
            {done ? (
              /* ---- Success state ---- */
              <div className="flex flex-col items-center gap-4 py-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-base">Password Changed!</p>
                  <p className="text-sm text-muted-foreground">
                    Your password has been updated successfully. Use your new
                    password next time you sign in.
                  </p>
                </div>
                <Button className="w-full mt-2" onClick={() => navigate("/")}>
                  Go to Home
                </Button>
              </div>
            ) : (
              /* ---- Form state ---- */
              <form onSubmit={handleSubmit} className="space-y-4">
                <PasswordInput
                  id="currentPassword"
                  label="Current Password"
                  placeholder="Enter your current password"
                  value={currentPassword}
                  onChange={setCurrentPassword}
                  show={showCurrent}
                  onToggle={() => setShowCurrent((p) => !p)}
                  error={errors.currentPassword}
                  onClearError={clearError}
                />

                <PasswordInput
                  id="newPassword"
                  label="New Password"
                  placeholder="At least 6 characters"
                  value={newPassword}
                  onChange={setNewPassword}
                  show={showNew}
                  onToggle={() => setShowNew((p) => !p)}
                  error={errors.newPassword}
                  onClearError={clearError}
                />

                <PasswordInput
                  id="confirmPassword"
                  label="Confirm New Password"
                  placeholder="Re-enter your new password"
                  value={confirmPassword}
                  onChange={setConfirmPassword}
                  show={showConfirm}
                  onToggle={() => setShowConfirm((p) => !p)}
                  error={errors.confirmPassword}
                  onClearError={clearError}
                />

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Updating password...
                    </>
                  ) : (
                    "Update Password"
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
