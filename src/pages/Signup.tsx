import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
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
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import {
  GraduationCap,
  UserCircle,
  BookOpen,
  Loader2,
  ArrowLeft,
} from "lucide-react";
import { z } from "zod";

/* ---------------- Validation ---------------- */

const signupSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type AppRole = "admin" | "teacher" | "student";

/* ---------------- Component ---------------- */

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState<AppRole>("student");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const { signUp } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  /* Clear on reload */
  useEffect(() => {
    setEmail("");
    setPassword("");
    setFullName("");
    setRole("student");
    setErrors({});
  }, []);

  /* Handle back button navigation */
  useEffect(() => {
    const handlePopState = () => {
      navigate("/", { replace: true });
    };

    window.addEventListener("popstate", handlePopState);
    
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);

  /* ---------------- Validation ---------------- */

  const validateForm = () => {
    try {
      signupSchema.parse({ email, password });
      setErrors({});
      return true;
    } catch (e) {
      if (e instanceof z.ZodError) {
        const newErrors: { email?: string; password?: string } = {};
        e.errors.forEach((err) => {
          if (err.path[0] === "email") newErrors.email = err.message;
          if (err.path[0] === "password") newErrors.password = err.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  /* ---------------- Sign Up ---------------- */

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (!fullName.trim()) {
      toast({
        variant: "destructive",
        title: "Name required",
        description: "Please enter your full name.",
      });
      return;
    }

    setIsLoading(true);
    const { error } = await signUp(email, password, fullName, role);
    setIsLoading(false);

    if (error) {
      toast({
        variant: "destructive",
        title: "Sign up failed",
        description: error.message,
      });
    } else {
      toast({
        title: "Signup request submitted!",
        description: "Your account is pending admin approval. You'll be able to log in once approved.",
      });
      // Clear form
      setEmail("");
      setPassword("");
      setFullName("");
      setRole("student");
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-muted/50 to-background">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-primary">
              <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 text-primary-foreground" />
            </div>
            <div className="w-4 sm:w-5" />
          </div>
          <CardTitle className="text-xl sm:text-2xl font-bold">Create Account</CardTitle>
          <CardDescription className="text-sm sm:text-base">Join StudyHub and start learning today</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <Label>Full Name</Label>
              <Input
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div>
              <Label>Email</Label>
              <Input
                autoComplete="off"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-xs text-destructive mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Create a password (min. 6 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-xs text-destructive mt-1">{errors.password}</p>
              )}
            </div>

            {/* ---------- ROLE SELECTION ---------- */}
            <div>
              <Label className="mb-2 sm:mb-3 block text-sm sm:text-base">I am a...</Label>
              <RadioGroup
                value={role}
                onValueChange={(v) => setRole(v as AppRole)}
                className="grid grid-cols-2 gap-2 sm:gap-3"
              >
                {/* Student */}
                <Label
                  htmlFor="student"
                  className={`flex flex-col items-center gap-1.5 sm:gap-2 p-3 sm:p-4 rounded-xl border-2 cursor-pointer transition-all
                    ${
                      role === "student"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                >
                  <RadioGroupItem value="student" id="student" className="sr-only" />
                  <UserCircle
                    className={`h-5 w-5 sm:h-6 sm:w-6 ${
                      role === "student" ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                  <span className="font-medium text-sm sm:text-base">Student</span>
                </Label>

                {/* Teacher */}
                <Label
                  htmlFor="teacher"
                  className={`flex flex-col items-center gap-1.5 sm:gap-2 p-3 sm:p-4 rounded-xl border-2 cursor-pointer transition-all
                    ${
                      role === "teacher"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                >
                  <RadioGroupItem value="teacher" id="teacher" className="sr-only" />
                  <BookOpen
                    className={`h-5 w-5 sm:h-6 sm:w-6 ${
                      role === "teacher" ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                  <span className="font-medium text-sm sm:text-base">Teacher</span>
                </Label>
              </RadioGroup>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/signin" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
