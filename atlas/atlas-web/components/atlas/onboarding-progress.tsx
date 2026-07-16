"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface OnboardingProgressProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export function OnboardingProgress({
  currentStep,
  totalSteps,
  className,
}: OnboardingProgressProps) {
  const progress = Math.min((currentStep / totalSteps) * 100, 100);

  return (
    <div className={cn("w-full", className)}>
      <div className="h-1 w-full overflow-hidden rounded-full bg-atlas-border">
        <motion.div
          className="h-full rounded-full bg-atlas-accent"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
