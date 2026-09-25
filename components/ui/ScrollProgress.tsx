import React from 'react';

/**
 * Reading progress bar pinned to the top of long articles (Magic UI "Scroll Progress" idea).
 * Pure CSS scroll-driven animation — no JavaScript. Browsers without
 * `animation-timeline` support simply don't show it (see .scroll-progress in globals.css).
 */
export const ScrollProgress: React.FC = () => <div className="scroll-progress" aria-hidden="true" />;
