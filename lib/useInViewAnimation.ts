import { useReducedMotion } from 'framer-motion';

export function useInViewAnimation() {
  const prefersReducedMotion = useReducedMotion();

  const getSectionAnimation = () => {
    if (prefersReducedMotion) {
      return {
        initial: { opacity: 1, y: 0 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
      };
    }
    return {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: 'easeOut' },
      viewport: { once: true, margin: '-80px' },
    };
  };

  const getStaggerContainer = (staggerDelay = 0.1) => {
    if (prefersReducedMotion) {
      return {
        initial: {},
        whileInView: {},
        viewport: { once: true },
      };
    }
    return {
      initial: {},
      whileInView: {
        transition: {
          staggerChildren: staggerDelay,
        },
      },
      viewport: { once: true, margin: '-80px' },
    };
  };

  const getStaggerChild = () => {
    if (prefersReducedMotion) {
      return {
        initial: { opacity: 1, y: 0 },
        whileInView: { opacity: 1, y: 0 },
      };
    }
    return {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.4, ease: 'easeOut' },
    };
  };

  const getGlowHover = () => {
    if (prefersReducedMotion) return {};
    return {
      whileHover: { boxShadow: '0 0 0 4px rgba(37,99,235,0.25)' },
    };
  };

  const getFloatingAnimation = () => {
    if (prefersReducedMotion) return {};
    return {
      animate: { y: [0, -12, 0] },
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    };
  };

  return {
    prefersReducedMotion,
    getSectionAnimation,
    getStaggerContainer,
    getStaggerChild,
    getGlowHover,
    getFloatingAnimation,
  };
}
