import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { submitVerifiedSignupRequest, resendVerificationEmail } from "@/services/api";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  GraduationCap,
  Loader2,
  Mail,
  CheckCircle2,
  RefreshCw,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import { auth } from "@/config/firebase";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [done, setDone] = useState(false);

  // Get email from the currently signed-in Firebase user
  const email = auth.currentUser?.email ?? "";

  // If there's no active session at all (e.g. user navigated here directly)
  const hasSession = !!auth.currentUser;

  /* ------------------------------------------------------------------ */
  /* Handle "I've verified my email" click                               */
  /* ------------------------------------------------------------------ */
  const handleVerified = async () => {
    setIsVerifying(true);
    const { error } = await submitVerifiedSignupRequest();
    setIsVerifying(false);

    if (error) {
      toast({
        variant: "destructive",
        title: "Verification failed",
        description: error,
      });
    } else {
      setDone(true);
    }
  };

  /* ------------------------------------------------------------------ */
  /* Handle "Resend email" click                                         */
  /* ------------------------------------------------------------------ */
  const handleResend = async () => {
    setIsResending(true);
    const { error } = await resendVerificationEmail();
    setIsResending(false);

    if (error) {
      toast({ variant: "destructive", title: "Could not resend email", description: error });
    } else {
      toast({
        title: "Verification email sent!",
        description: `A new link has been sent to ${email}. Check your inbox.`,
      });
    }
  };

  /* ------------------------------------------------------------------ */
  /* Success screen — shown after admin request has been submitted       */
  /* ------------------------------------------------------------------ */
  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-muted/50 to-background">
        <Card className="w-full max-w-md shadow-xl">
          <CardContent className="pt-8 pb-6 flex flex-col items-center gap-5 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
              <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Request Submitted!</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your email has been verified and your signup request has been sent to the admin for approval.
              </p>
              <p className="text-sm text-muted-foreground">
                You'll be able to sign in once the admin approves your account. This usually takes
                a short while — please check back later.
              </p>
            </div>
            <Link to="/signin" className="w-full">
              <Button className="w-full">Go to Sign In</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  /* ------------------------------------------------------------------ */
  /* No session — user navigated here without signing up first           */
  /* ------------------------------------------------------------------ */
  if (!hasSession) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-muted/50 to-background">
        <Card className="w-full max-w-md shadow-xl">
          <CardContent className="pt-8 pb-6 flex flex-col items-center gap-5 text-center">
            <p className="text-sm text-muted-foreground">
              No active session found. Please sign up first.
            </p>
            <Link to="/signup">
              <Button>Go to Sign Up</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  /* ------------------------------------------------------------------ */
  /* Main verify-email screen                                            */
  /* ------------------------------------------------------------------ */
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-muted/50 to-background">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <Link to="/signup" className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-primary">
              <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 text-primary-foreground" />
            </div>
            <div className="w-4 sm:w-5" />
          </div>
          <CardTitle className="text-xl sm:text-2xl font-bold">Verify Your Email</CardTitle>
          <CardDescription className="text-sm sm:text-base">
            One more step before your request reaches the admin.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5">
          {/* Email icon + message */}
          <div className="flex flex-col items-center gap-3 py-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A verification link has been sent to{" "}
              <span className="font-semibold text-foreground">{email}</span>.
              <br />
              Open the email and click the link, then come back here.
            </p>
            <p className="text-xs text-muted-foreground">
              Don't see it? Check your <span className="font-medium">spam / junk folder</span>.
            </p>
          </div>

          {/* Step indicators */}
          <div className="rounded-xl border bg-muted/40 p-4 space-y-3">
            <p className="text-xs font-semibold uppercase text-muted-foreground tracking-wide">Steps</p>
            {[
              { icon: CheckCircle2, label: "Account created", done: true },
              { icon: Mail, label: "Verify your email (check inbox)", done: false },
              { icon: ShieldCheck, label: "Admin approves your request", done: false },
            ].map(({ icon: Icon, label, done: stepDone }, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    stepDone
                      ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {stepDone ? <Icon className="h-4 w-4" /> : i + 1}
                </div>
                <span className={`text-sm ${stepDone ? "line-through text-muted-foreground" : "text-foreground"}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Primary action */}
          <Button
            className="w-full"
            onClick={handleVerified}
            disabled={isVerifying}
          >
            {isVerifying ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Checking verification...
              </>
            ) : (
              "I've verified my email — Submit Request"
            )}
          </Button>

          {/* Resend */}
          <Button
            variant="outline"
            className="w-full"
            onClick={handleResend}
            disabled={isResending}
          >
            {isResending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                Resend verification email
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
