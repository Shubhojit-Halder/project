import { motion,Variants } from "framer-motion";


export const headerVariant = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};
export const fadeIn = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeIn" },
  },
};
export const fadePara ={
  offscreen: {
    x: -100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity:1,
    transition: {
      ease: "easeInOut",
      bounce: 0.4,
      duration: 1,
    },
  },
}
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.7,
    },
  },
};
export const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};
