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

  // On client mount, set starting value to 0 if not in view yet
  useEffect(() => {
    if (ref.current && !inView && !prefersReducedMotion) {
      ref.current.textContent = `0${suffix}`;
    }
  }, [suffix, inView, prefersReducedMotion]);

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

    const isDecimal = !Number.isInteger(value);
    return springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = (isDecimal ? latest.toFixed(1) : Math.floor(latest).toString()) + suffix;
      }
    });
  }, [springValue, suffix, value, prefersReducedMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}{suffix}
    </span>
  );
};
export default AnimatedCounter;
