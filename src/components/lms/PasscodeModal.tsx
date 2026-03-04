import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Loader2 } from "lucide-react";

interface PasscodeModalProps {
  isOpen: boolean;
  className: string;
  /** Called with the entered passcode; should resolve to true if correct */
  onVerify: (passcode: string) => Promise<boolean>;
  onSuccess: () => void;
  onCancel: () => void;
}

export function PasscodeModal({
  isOpen,
  className,
  onVerify,
  onSuccess,
  onCancel,
}: PasscodeModalProps) {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!passcode.trim()) {
      setError("Please enter the passcode.");
      return;
    }

    setLoading(true);
    const isCorrect = await onVerify(passcode.trim());
    setLoading(false);

    if (isCorrect) {
      setPasscode("");
      setError("");
      onSuccess();
    } else {
      setError("Incorrect passcode. Please try again.");
    }
  };

  const handleCancel = () => {
    setPasscode("");
    setError("");
    onCancel();
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) handleCancel();
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-primary" />
            Enter Passcode for {className}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <p className="text-sm text-muted-foreground">
            This class is protected. Please enter the passcode to access the
            content.
          </p>

          <Input
            type="password"
            placeholder="Enter passcode..."
            value={passcode}
            onChange={(e) => {
              setPasscode(e.target.value);
              setError("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !loading) handleSubmit();
            }}
            autoFocus
          />

          {error && <p className="text-sm text-destructive">{error}</p>}

          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={handleCancel} disabled={loading}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                "Unlock"
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
