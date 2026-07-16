"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface OptionCardProps {
  label: string;
  description?: string;
  selected?: boolean;
  onClick: () => void;
}

export function OptionCard({
  label,
  description,
  selected = false,
  onClick,
}: OptionCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "w-full rounded-3xl border px-6 py-5 text-left transition-colors",
        selected
          ? "border-atlas-accent bg-atlas-card shadow-card"
          : "border-atlas-border bg-atlas-card/80 hover:border-atlas-primary/20"
      )}
    >
      <span className="block text-lg font-medium tracking-tight text-atlas-primary">
        {label}
      </span>
      {description ? (
        <span className="mt-1 block text-sm text-atlas-muted">{description}</span>
      ) : null}
    </motion.button>
  );
}
