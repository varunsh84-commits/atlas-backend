export interface OnboardingData {
  goal: string | null;
  pace: string | null;
  gender: string | null;
  age: string;
  heightCm: string;
  weightKg: string;
  activityLevel: string | null;
  dietaryPreference: string | null;
}

export const initialOnboardingData: OnboardingData = {
  goal: null,
  pace: null,
  gender: null,
  age: "",
  heightCm: "",
  weightKg: "",
  activityLevel: null,
  dietaryPreference: null,
};
