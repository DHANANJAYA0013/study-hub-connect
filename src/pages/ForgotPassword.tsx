import { useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordReset } from "@/services/api";
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
import { useToast } from "@/hooks/use-toast";
import { GraduationCap, Loader2, ArrowLeft, Mail, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const validate = () => {
    try {
      emailSchema.parse({ email });
      setEmailError("");
      return true;
    } catch (e) {
      if (e instanceof z.ZodError) {
        setEmailError(e.errors[0]?.message ?? "Invalid email");
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    const { error } = await sendPasswordReset(email);
    setIsLoading(false);

    if (error) {
      toast({
        variant: "destructive",
        title: "Failed to send reset email",
        description: error,
      });
    } else {
      setSent(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-muted/50 to-background">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <Link
              to="/signin"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-primary">
              <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 text-primary-foreground" />
            </div>
            <div className="w-4 sm:w-5" />
          </div>
          <CardTitle className="text-xl sm:text-2xl font-bold">Forgot Password?</CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Enter your registered email and we'll send you a reset link.
          </CardDescription>
        </CardHeader>

        <CardContent>
          {sent ? (
            /* ---- Success state ---- */
            <div className="flex flex-col items-center gap-4 py-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-base">Check your inbox</p>
                <p className="text-sm text-muted-foreground">
                  If <span className="font-medium text-foreground">{email}</span> is
                  registered, a password reset link has been sent to it.
                </p>
                <p className="text-xs text-muted-foreground pt-1">
                  The link expires in <span className="font-medium">1 hour</span>.
                  If you don't see it, check your <span className="font-medium">spam or junk folder</span>.
                </p>
              </div>
              <div className="flex flex-col gap-2 w-full pt-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSent(false);
                    setEmail("");
                  }}
                >
                  Send to a different email
                </Button>
                <Link to="/signin">
                  <Button className="w-full">Back to Sign In</Button>
                </Link>
              </div>
            </div>
          ) : (
            /* ---- Form state ---- */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your registered email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError("");
                    }}
                    className="pl-9"
                  />
                </div>
                {emailError && (
                  <p className="text-xs text-destructive mt-1">{emailError}</p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending reset link...
                  </>
                ) : (
                  "Send Reset Link"
                )}
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                Remembered your password?{" "}
                <Link
                  to="/signin"
                  className="text-primary hover:underline font-medium"
                >
                  Sign In
                </Link>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
