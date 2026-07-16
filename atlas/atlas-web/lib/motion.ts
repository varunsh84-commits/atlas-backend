import type { Transition, Variants } from "framer-motion";

/** Calm, Apple-inspired easing used across Atlas. */
export const atlasEase = [0.22, 1, 0.36, 1] as const;

export const atlasDuration = {
  fast: 0.2,
  normal: 0.25,
  slow: 0.3,
} as const;

export const atlasTransition: Transition = {
  duration: atlasDuration.normal,
  ease: atlasEase,
};

export const atlasSpring: Transition = {
  type: "spring",
  stiffness: 420,
  damping: 36,
  mass: 0.8,
};

/** Cards and list items — subtle fade upward. */
export const fadeUp: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: atlasDuration.normal, ease: atlasEase },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: atlasDuration.fast, ease: atlasEase },
  },
};

/** Full-page transitions between routes. */
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: atlasDuration.normal, ease: atlasEase },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: atlasDuration.fast, ease: atlasEase },
  },
};

/** Wizard / step flows — horizontal drift kept minimal. */
export const stepTransition: Variants = {
  initial: { opacity: 0, x: 16 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: atlasDuration.normal, ease: atlasEase },
  },
  exit: {
    opacity: 0,
    x: -12,
    transition: { duration: atlasDuration.fast, ease: atlasEase },
  },
};

/** Bottom navigation entrance. */
export const navSlide: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: atlasDuration.slow, ease: atlasEase },
  },
};

/** Coach and chat message bubbles. */
export const messageFade: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: atlasDuration.normal, ease: atlasEase },
  },
};

/** Stagger children inside a section. */
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export const staggerItem: Variants = fadeUp;

/** Gentle button press / hover. */
export const buttonMotion = {
  whileHover: { scale: 1.012 },
  whileTap: { scale: 0.988 },
  transition: { duration: atlasDuration.fast, ease: atlasEase },
};

/** Progress bar fill animation config. */
export const progressTransition: Transition = {
  duration: atlasDuration.slow,
  ease: atlasEase,
};
