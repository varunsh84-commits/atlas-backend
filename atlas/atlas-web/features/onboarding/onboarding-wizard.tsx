"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { OnboardingProgress } from "@/components/atlas/onboarding-progress";
import { OptionCard } from "@/components/atlas/option-card";
import { Button } from "@/components/ui/button";
import {
  ACTIVITY_OPTIONS,
  DIETARY_OPTIONS,
  GENDER_OPTIONS,
  GOAL_OPTIONS,
  PACE_OPTIONS,
  TOTAL_STEPS,
} from "@/features/onboarding/constants";
import { initialOnboardingData, type OnboardingData } from "@/features/onboarding/types";

const slideVariants = {
  enter: { opacity: 0, x: 24 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
};

export function OnboardingWizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<OnboardingData>(initialOnboardingData);

  const canContinue = useMemo(() => {
    switch (step) {
      case 0:
        return data.goal !== null;
      case 1:
        return data.pace !== null;
      case 2:
        return data.gender !== null;
      case 3:
        return data.age.trim().length > 0;
      case 4:
        return data.heightCm.trim().length > 0;
      case 5:
        return data.weightKg.trim().length > 0;
      case 6:
        return data.activityLevel !== null;
      case 7:
        return data.dietaryPreference !== null;
      default:
        return true;
    }
  }, [step, data]);

  const goNext = () => {
    if (step < TOTAL_STEPS - 1) {
      setStep((current) => current + 1);
    }
  };

  const goBack = () => {
    if (step > 0) {
      setStep((current) => current - 1);
    }
  };

  const updateField = <K extends keyof OnboardingData>(
    key: K,
    value: OnboardingData[K]
  ) => {
    setData((current) => ({ ...current, [key]: value }));
  };

  return (
    <div className="mx-auto flex min-h-screen min-h-[100dvh] w-full max-w-lg flex-col bg-[#F8F8F5] px-6 pb-10 pt-8 sm:px-8">
      {step < TOTAL_STEPS - 1 ? (
        <OnboardingProgress
          currentStep={step + 1}
          totalSteps={TOTAL_STEPS - 1}
          className="mb-12"
        />
      ) : (
        <div className="mb-12 h-1" />
      )}

      <div className="flex flex-1 flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-1 flex-col"
          >
            {step === 0 && (
              <StepOptions
                question="What should Atlas help you achieve?"
                options={GOAL_OPTIONS}
                selected={data.goal}
                onSelect={(value) => updateField("goal", value)}
              />
            )}

            {step === 1 && (
              <StepOptions
                question="How quickly would you like to reach your goal?"
                options={PACE_OPTIONS}
                selected={data.pace}
                onSelect={(value) => updateField("pace", value)}
              />
            )}

            {step === 2 && (
              <StepOptions
                question="What's your gender?"
                options={GENDER_OPTIONS}
                selected={data.gender}
                onSelect={(value) => updateField("gender", value)}
              />
            )}

            {step === 3 && (
              <StepInput
                question="How old are you?"
                label="Age"
                suffix="years"
                inputMode="numeric"
                value={data.age}
                onChange={(value) => updateField("age", value)}
                placeholder="30"
              />
            )}

            {step === 4 && (
              <StepInput
                question="What's your height?"
                label="Height"
                suffix="cm"
                inputMode="decimal"
                value={data.heightCm}
                onChange={(value) => updateField("heightCm", value)}
                placeholder="175"
              />
            )}

            {step === 5 && (
              <StepInput
                question="What's your weight?"
                label="Weight"
                suffix="kg"
                inputMode="decimal"
                value={data.weightKg}
                onChange={(value) => updateField("weightKg", value)}
                placeholder="72"
              />
            )}

            {step === 6 && (
              <StepOptions
                question="What's your activity level?"
                options={ACTIVITY_OPTIONS}
                selected={data.activityLevel}
                onSelect={(value) => updateField("activityLevel", value)}
              />
            )}

            {step === 7 && (
              <StepOptions
                question="What's your dietary preference?"
                options={DIETARY_OPTIONS}
                selected={data.dietaryPreference}
                onSelect={(value) => updateField("dietaryPreference", value)}
              />
            )}

            {step === 8 && <SummaryStep />}
          </motion.div>
        </AnimatePresence>
      </div>

      {step < TOTAL_STEPS - 1 ? (
        <div className="mt-10 flex items-center gap-4">
          {step > 0 ? (
            <Button variant="ghost" size="sm" onClick={goBack}>
              Back
            </Button>
          ) : (
            <div className="w-16" />
          )}
          <Button
            variant="primary"
            size="full"
            className="flex-1"
            disabled={!canContinue}
            onClick={goNext}
          >
            Continue
          </Button>
        </div>
      ) : null}
    </div>
  );
}

interface StepOptionsProps {
  question: string;
  options: ReadonlyArray<{
    value: string;
    label: string;
    description?: string;
  }>;
  selected: string | null;
  onSelect: (value: string) => void;
}

function StepOptions({
  question,
  options,
  selected,
  onSelect,
}: StepOptionsProps) {
  return (
    <div className="flex flex-1 flex-col">
      <h1 className="text-3xl font-semibold leading-tight tracking-tight text-atlas-primary sm:text-4xl">
        {question}
      </h1>
      <div className="mt-10 flex flex-col gap-3">
        {options.map((option) => (
          <OptionCard
            key={option.value}
            label={option.label}
            description={option.description}
            selected={selected === option.value}
            onClick={() => onSelect(option.value)}
          />
        ))}
      </div>
    </div>
  );
}

interface StepInputProps {
  question: string;
  label: string;
  suffix: string;
  inputMode?: "numeric" | "decimal";
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

function StepInput({
  question,
  label,
  suffix,
  inputMode = "numeric",
  value,
  onChange,
  placeholder,
}: StepInputProps) {
  return (
    <div className="flex flex-1 flex-col">
      <h1 className="text-3xl font-semibold leading-tight tracking-tight text-atlas-primary sm:text-4xl">
        {question}
      </h1>
      <div className="mt-12">
        <label className="mb-3 block text-sm font-medium text-atlas-muted">
          {label}
        </label>
        <div className="relative">
          <input
            type="text"
            inputMode={inputMode}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder={placeholder}
            className="h-16 w-full rounded-3xl border border-atlas-border bg-atlas-card px-6 text-2xl font-medium tracking-tight text-atlas-primary shadow-soft placeholder:text-atlas-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atlas-accent"
          />
          <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-base text-atlas-muted">
            {suffix}
          </span>
        </div>
      </div>
    </div>
  );
}

function SummaryStep() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-sm"
      >
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-atlas-primary sm:text-4xl">
          Atlas is creating your personalized plan...
        </h1>
        <p className="mt-4 text-base text-atlas-muted">
          This will only take a moment.
        </p>
      </motion.div>

      <div className="mt-12 flex items-center gap-2" aria-label="Loading" role="status">
        {[0, 1, 2].map((index) => (
          <motion.span
            key={index}
            className="h-2 w-2 rounded-full bg-atlas-accent"
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.1, 0.9] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
