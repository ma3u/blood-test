
import { createContext, useState, useContext, ReactNode, useEffect } from "react";

export interface HealthIssue {
  name: string;
  severity: "mild" | "moderate" | "severe";
  diagnosedYear?: number;
}

export interface UserProfile {
  age?: number;
  height?: number; // in cm
  weight?: number; // in kg
  bodyMassIndex?: number; // calculated
  gender: "male" | "female";
  healthIssues: HealthIssue[];
}

interface UserProfileContextType {
  profile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;
  addHealthIssue: (issue: HealthIssue) => void;
  removeHealthIssue: (index: number) => void;
  updateHealthIssue: (index: number, issue: HealthIssue) => void;
  calculateBMI: () => number | undefined;
}

const defaultProfile: UserProfile = {
  gender: "male",
  healthIssues: [],
};

const UserProfileContext = createContext<UserProfileContextType | undefined>(undefined);

export const UserProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<UserProfile>(() => {
    const savedProfile = localStorage.getItem("userProfile");
    return savedProfile ? JSON.parse(savedProfile) : defaultProfile;
  });

  useEffect(() => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
  }, [profile]);

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile(prev => {
      const updated = { ...prev, ...updates };
      
      // Calculate BMI if height and weight are available
      if (updates.height || updates.weight) {
        const bmi = calculateBMI(updated);
        if (bmi) {
          updated.bodyMassIndex = bmi;
        }
      }
      
      return updated;
    });
  };

  const calculateBMI = (profileData = profile): number | undefined => {
    const { height, weight } = profileData;
    if (!height || !weight || height <= 0 || weight <= 0) {
      return undefined;
    }
    // BMI formula: weight (kg) / (height (m))²
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return parseFloat(bmi.toFixed(1));
  };

  const addHealthIssue = (issue: HealthIssue) => {
    setProfile(prev => ({
      ...prev,
      healthIssues: [...prev.healthIssues, issue]
    }));
  };

  const removeHealthIssue = (index: number) => {
    setProfile(prev => ({
      ...prev,
      healthIssues: prev.healthIssues.filter((_, i) => i !== index)
    }));
  };

  const updateHealthIssue = (index: number, issue: HealthIssue) => {
    setProfile(prev => {
      const updatedIssues = [...prev.healthIssues];
      updatedIssues[index] = issue;
      return {
        ...prev,
        healthIssues: updatedIssues
      };
    });
  };

  return (
    <UserProfileContext.Provider
      value={{
        profile,
        updateProfile,
        addHealthIssue,
        removeHealthIssue,
        updateHealthIssue,
        calculateBMI
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = () => {
  const context = useContext(UserProfileContext);
  if (context === undefined) {
    throw new Error("useUserProfile must be used within a UserProfileProvider");
  }
  return context;
};
