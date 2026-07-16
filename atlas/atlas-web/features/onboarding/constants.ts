export const GOAL_OPTIONS = [
  { value: "lose_fat", label: "Lose Fat" },
  { value: "build_muscle", label: "Build Muscle" },
  { value: "improve_health", label: "Improve Health" },
  { value: "increase_energy", label: "Increase Energy" },
  { value: "athletic_performance", label: "Athletic Performance" },
] as const;

export const PACE_OPTIONS = [
  {
    value: "sustainable",
    label: "Sustainable",
    description: "Steady progress with habits that last",
  },
  {
    value: "balanced",
    label: "Balanced",
    description: "A practical pace for most people",
  },
  {
    value: "fast_results",
    label: "Fast Results",
    description: "More aggressive, requires consistency",
  },
] as const;

export const GENDER_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
] as const;

export const ACTIVITY_OPTIONS = [
  { value: "sedentary", label: "Sedentary", description: "Little or no exercise" },
  {
    value: "lightly_active",
    label: "Lightly Active",
    description: "Light exercise 1–3 days per week",
  },
  {
    value: "moderately_active",
    label: "Moderately Active",
    description: "Moderate exercise 3–5 days per week",
  },
  {
    value: "very_active",
    label: "Very Active",
    description: "Hard exercise 6–7 days per week",
  },
  {
    value: "extremely_active",
    label: "Extremely Active",
    description: "Very hard exercise or physical job",
  },
] as const;

export const DIETARY_OPTIONS = [
  { value: "none", label: "No Preference" },
  { value: "vegetarian", label: "Vegetarian" },
  { value: "eggetarian", label: "Eggetarian" },
  { value: "non_vegetarian", label: "Non-Vegetarian" },
  { value: "vegan", label: "Vegan" },
  { value: "pescatarian", label: "Pescatarian" },
  { value: "keto", label: "Keto" },
  { value: "gluten_free", label: "Gluten Free" },
] as const;

export const TOTAL_STEPS = 9;
