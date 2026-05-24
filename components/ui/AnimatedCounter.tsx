'use client';

import React, { useEffect, useRef } from 'react';
import { useMotionValue, useSpring, useInView, useReducedMotion } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, suffix = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const prefersReducedMotion = useReducedMotion();

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 90,
  });

  useEffect(() => {
    if (prefersReducedMotion) {
      motionValue.set(value);
      return;
    }
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      if (ref.current) {
        ref.current.textContent = `${value}${suffix}`;
      }
      return;
    }

    return springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });
  }, [springValue, suffix, value, prefersReducedMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefersReducedMotion ? `${value}${suffix}` : `0${suffix}`}
    </span>
  );
};
export default AnimatedCounter;
