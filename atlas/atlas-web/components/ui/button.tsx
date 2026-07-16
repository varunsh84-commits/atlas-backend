import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atlas-accent disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary: "bg-atlas-primary text-white shadow-soft hover:bg-atlas-primary/90",
        accent: "bg-atlas-accent text-white shadow-soft hover:bg-atlas-accent/90",
        ghost: "text-atlas-muted hover:text-atlas-primary",
      },
      size: {
        default: "h-14 px-8",
        sm: "h-11 px-5 text-sm",
        full: "h-14 w-full px-8",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}
