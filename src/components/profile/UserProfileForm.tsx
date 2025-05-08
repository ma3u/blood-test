
import { useState } from "react";
import { useUserProfile, HealthIssue } from "@/context/UserProfileContext";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Trash2, Plus } from "lucide-react";
import { GenderSwitch } from "@/components/GenderSwitch";
import { useToast } from "@/hooks/use-toast";

export function UserProfileForm() {
  const { profile, updateProfile, addHealthIssue, removeHealthIssue, updateHealthIssue } = useUserProfile();
  const { t } = useLanguage();
  const { toast } = useToast();
  const [newIssue, setNewIssue] = useState<string>("");
  const [newSeverity, setNewSeverity] = useState<HealthIssue["severity"]>("moderate");
  const [newYear, setNewYear] = useState<string>("");

  const handleProfileUpdate = (field: keyof typeof profile, value: string) => {
    if (field === "age" || field === "height" || field === "weight") {
      // Convert to number and validate
      const numValue = value.trim() === "" ? undefined : Number(value);
      if (numValue !== undefined && (isNaN(numValue) || numValue <= 0)) {
        toast({
          title: t("error.invalid.value"),
          description: t("error.positive.number"),
          variant: "destructive",
        });
        return;
      }
      updateProfile({ [field]: numValue });
    } else {
      updateProfile({ [field]: value });
    }
  };

  const handleAddHealthIssue = () => {
    if (!newIssue.trim()) {
      toast({
        title: t("error.required"),
        description: t("profile.health.issue.required"),
        variant: "destructive",
      });
      return;
    }

    const diagnosedYear = newYear.trim() ? parseInt(newYear) : undefined;
    if (diagnosedYear && (isNaN(diagnosedYear) || diagnosedYear > new Date().getFullYear())) {
      toast({
        title: t("error.invalid.year"),
        description: t("error.year.future"),
        variant: "destructive",
      });
      return;
    }

    addHealthIssue({
      name: newIssue.trim(),
      severity: newSeverity,
      diagnosedYear
    });

    // Clear form fields
    setNewIssue("");
    setNewSeverity("moderate");
    setNewYear("");

    toast({
      title: t("profile.health.issue.added"),
      description: `${newIssue} ${t("profile.added.successfully")}`,
    });
  };

  const handleUpdateSeverity = (index: number, severity: HealthIssue["severity"]) => {
    const issue = profile.healthIssues[index];
    updateHealthIssue(index, { ...issue, severity });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t("profile.basic.info")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center">
              <Label htmlFor="gender" className="w-24">{t("profile.gender")}</Label>
              <GenderSwitch 
                gender={profile.gender}
                onChange={(gender) => updateProfile({ gender })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">{t("profile.age")}</Label>
                <Input
                  id="age"
                  type="number"
                  min="1"
                  max="120"
                  value={profile.age || ""}
                  onChange={(e) => handleProfileUpdate("age", e.target.value)}
                  placeholder={t("profile.age.placeholder")}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="height">{t("profile.height")} (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  min="1"
                  max="300"
                  value={profile.height || ""}
                  onChange={(e) => handleProfileUpdate("height", e.target.value)}
                  placeholder={t("profile.height.placeholder")}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="weight">{t("profile.weight")} (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  min="1"
                  max="500"
                  value={profile.weight || ""}
                  onChange={(e) => handleProfileUpdate("weight", e.target.value)}
                  placeholder={t("profile.weight.placeholder")}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bmi">{t("profile.bmi")}</Label>
                <Input
                  id="bmi"
                  type="text"
                  value={profile.bodyMassIndex?.toString() || ""}
                  disabled
                  className="bg-muted"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("profile.health.issues")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col space-y-4">
              {profile.healthIssues.map((issue, index) => (
                <div key={index} className="flex items-center space-x-2 border p-3 rounded-md">
                  <div className="flex-grow">
                    <p className="font-medium">{issue.name}</p>
                    {issue.diagnosedYear && (
                      <p className="text-sm text-muted-foreground">
                        {t("profile.diagnosed")}: {issue.diagnosedYear}
                      </p>
                    )}
                  </div>
                  
                  <Select 
                    value={issue.severity}
                    onValueChange={(value) => handleUpdateSeverity(index, value as HealthIssue["severity"])}
                  >
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder={t("profile.severity")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mild">{t("profile.severity.mild")}</SelectItem>
                      <SelectItem value="moderate">{t("profile.severity.moderate")}</SelectItem>
                      <SelectItem value="severe">{t("profile.severity.severe")}</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => removeHealthIssue(index)}
                    className="text-destructive"
                  >
                    <Trash2 size={18} />
                  </Button>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <p className="text-sm font-medium mb-2">{t("profile.add.health.issue")}</p>
              <div className="flex flex-col md:flex-row gap-2">
                <Input
                  value={newIssue}
                  onChange={(e) => setNewIssue(e.target.value)}
                  placeholder={t("profile.health.issue.name")}
                  className="flex-grow"
                />
                
                <Select value={newSeverity} onValueChange={(value) => setNewSeverity(value as HealthIssue["severity"])}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder={t("profile.severity")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mild">{t("profile.severity.mild")}</SelectItem>
                    <SelectItem value="moderate">{t("profile.severity.moderate")}</SelectItem>
                    <SelectItem value="severe">{t("profile.severity.severe")}</SelectItem>
                  </SelectContent>
                </Select>
                
                <Input
                  value={newYear}
                  onChange={(e) => setNewYear(e.target.value)}
                  placeholder={t("profile.diagnosed.year")}
                  className="w-[120px]"
                  type="number"
                  min="1900"
                  max={new Date().getFullYear()}
                />
                
                <Button onClick={handleAddHealthIssue} className="flex items-center gap-1">
                  <Plus size={16} />
                  <span>{t("profile.add")}</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={() => {
          toast({
            title: t("profile.saved"),
            description: t("profile.saved.description")
          });
        }}>
          {t("profile.save")}
        </Button>
      </div>
    </div>
  );
}
