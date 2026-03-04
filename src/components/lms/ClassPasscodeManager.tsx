import { useState, useEffect } from "react";
import {
  getAllClassPasscodes,
  setClassPasscode,
  removeClassPasscode,
  initializeClassPasscodes,
} from "@/services/api";
import { subjects } from "@/data/subjects";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, Unlock, KeyRound, Loader2, Eye, EyeOff, Trash2, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ClassPasscodeManager() {
  const { toast } = useToast();
  const [passcodes, setPasscodes] = useState<Record<string, string>>({});
  const [editValues, setEditValues] = useState<Record<string, string>>({});
  const [showPasscode, setShowPasscode] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [removing, setRemoving] = useState<string | null>(null);
  const [initializing, setInitializing] = useState(false);

  // Collect all unique class names from subjects data
  const uniqueClasses = Array.from(
    new Set(subjects.filter((s) => s.class).map((s) => s.class!))
  ).sort();

  const loadPasscodes = async () => {
    setLoading(true);
    const data = await getAllClassPasscodes();
    setPasscodes(data);
    const init: Record<string, string> = {};
    uniqueClasses.forEach((c) => {
      init[c] = ""; // always start input blank
    });
    setEditValues(init);
    setLoading(false);
  };

  useEffect(() => {
    const bootstrap = async () => {
      setInitializing(true);
      // Create Firestore docs for any class that has never been registered
      await initializeClassPasscodes(uniqueClasses);
      setInitializing(false);
      await loadPasscodes();
    };
    bootstrap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSave = async (cls: string) => {
    const val = editValues[cls]?.trim();
    if (!val) {
      toast({
        variant: "destructive",
        title: "Empty passcode",
        description: "Type a passcode first, or use Remove to unlock the class.",
      });
      return;
    }
    setSaving(cls);
    try {
      await setClassPasscode(cls, val);
      setPasscodes((prev) => ({ ...prev, [cls]: val }));
      setEditValues((prev) => ({ ...prev, [cls]: "" }));
      toast({
        title: "Passcode saved",
        description: `Passcode for ${cls} has been updated in Firebase.`,
      });
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Failed to save passcode",
        description: err?.message ?? "Unknown error. Check Firestore security rules.",
      });
    } finally {
      setSaving(null);
    }
  };

  const handleRemove = async (cls: string) => {
    setRemoving(cls);
    try {
      await removeClassPasscode(cls);
      setPasscodes((prev) => {
        const next = { ...prev };
        delete next[cls];
        return next;
      });
      setEditValues((prev) => ({ ...prev, [cls]: "" }));
      toast({
        title: "Passcode removed",
        description: `${cls} is now freely accessible to all students.`,
      });
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Failed to remove passcode",
        description: err?.message ?? "Unknown error. Check Firestore security rules.",
      });
    } finally {
      setRemoving(null);
    }
  };

  const toggleShow = (cls: string) => {
    setShowPasscode((prev) => ({ ...prev, [cls]: !prev[cls] }));
  };

  if (loading || initializing) {
    return (
      <div className="flex items-center justify-center gap-2 py-8 text-muted-foreground text-sm">
        <Loader2 className="h-5 w-5 animate-spin" />
        {initializing ? "Initializing Firebase collection…" : "Loading passcodes…"}
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              <KeyRound className="h-5 w-5 text-primary" />
              Class Passcode Management
            </CardTitle>
            <CardDescription className="mt-1">
              Passcodes are stored in the{" "}
              <code className="text-xs bg-muted px-1 py-0.5 rounded">
                class_passcodes
              </code>{" "}
              Firebase collection. Students must enter the correct passcode to
              access a locked class.
            </CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="shrink-0 gap-1.5"
            onClick={loadPasscodes}
          >
            <RefreshCw className="h-3.5 w-3.5" />
            Refresh
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {uniqueClasses.map((cls) => {
            const isLocked = !!(passcodes[cls]);
            return (
              <div
                key={cls}
                className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 border rounded-lg bg-card hover:bg-accent/30 transition-colors"
              >
                {/* Class name + status */}
                <div className="flex items-center gap-2 min-w-[150px]">
                  {isLocked ? (
                    <Lock className="h-4 w-4 text-orange-500 shrink-0" />
                  ) : (
                    <Unlock className="h-4 w-4 text-green-500 shrink-0" />
                  )}
                  <span className="font-medium text-sm">{cls}</span>
                  <Badge
                    variant={isLocked ? "default" : "secondary"}
                    className={`text-xs ${isLocked ? "bg-orange-500 hover:bg-orange-600" : ""}`}
                  >
                    {isLocked ? "Locked" : "Open"}
                  </Badge>
                </div>

                {/* Current passcode (masked) with show/hide toggle */}
                {isLocked && (
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground min-w-[120px]">
                    <span className="font-mono tracking-widest">
                      {showPasscode[cls]
                        ? passcodes[cls]
                        : "•".repeat(Math.min(passcodes[cls]?.length ?? 6, 8))}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleShow(cls)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      title={showPasscode[cls] ? "Hide" : "Show current passcode"}
                    >
                      {showPasscode[cls] ? (
                        <EyeOff className="h-3.5 w-3.5" />
                      ) : (
                        <Eye className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                )}

                {/* New passcode input + Save + Remove */}
                <div className="flex gap-2 flex-1">
                  <Input
                    type="password"
                    placeholder={isLocked ? "Update passcode…" : "Set passcode…"}
                    value={editValues[cls] ?? ""}
                    onChange={(e) =>
                      setEditValues((prev) => ({ ...prev, [cls]: e.target.value }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && saving !== cls) handleSave(cls);
                    }}
                    className="flex-1 h-9 text-sm"
                  />
                  <Button
                    size="sm"
                    onClick={() => handleSave(cls)}
                    disabled={saving === cls || removing === cls}
                    className="h-9 shrink-0"
                  >
                    {saving === cls ? (
                      <Loader2 className="h-3 w-3 animate-spin" />
                    ) : isLocked ? (
                      "Update"
                    ) : (
                      "Save"
                    )}
                  </Button>
                  {isLocked && (
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleRemove(cls)}
                      disabled={saving === cls || removing === cls}
                      className="h-9 shrink-0 gap-1"
                      title="Remove passcode — unlocks class for all students"
                    >
                      {removing === cls ? (
                        <Loader2 className="h-3 w-3 animate-spin" />
                      ) : (
                        <>
                          <Trash2 className="h-3 w-3" />
                          <span className="hidden sm:inline">Remove</span>
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </div>
            );
          })}

          {uniqueClasses.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-4">
              No classes found in the subjects data.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
