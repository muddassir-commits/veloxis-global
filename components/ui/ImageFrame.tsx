import React from 'react';
import Image from 'next/image';

// Fixed-ratio image box. The ratio lives on the wrapper, so every photo crops
// the same way at every screen width instead of stretching with its text.
const RATIOS = {
  '16/9': 'aspect-[16/9]',
  '16/10': 'aspect-[16/10]',
  '3/2': 'aspect-[3/2]',
  '4/3': 'aspect-[4/3]',
  '1/1': 'aspect-square',
  '4/5': 'aspect-[4/5]',
  '3/4': 'aspect-[3/4]',
} as const;

export type ImageRatio = keyof typeof RATIOS;

interface ImageFrameProps {
  src: string;
  alt: string;
  ratio?: ImageRatio;
  sizes?: string;
  priority?: boolean;
  /** CSS object-position, e.g. 'center top' to keep faces in frame */
  position?: string;
  className?: string;
  imageClassName?: string;
  children?: React.ReactNode;
}

export const ImageFrame: React.FC<ImageFrameProps> = ({
  src,
  alt,
  ratio = '4/3',
  sizes = '(max-width: 768px) 100vw, 50vw',
  priority = false,
  position = 'center',
  className = '',
  imageClassName = '',
  children,
}) => (
  <div className={`relative w-full overflow-hidden rounded-2xl bg-slate-100 ${RATIOS[ratio]} ${className}`}>
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      quality={80}
      className={`object-cover ${imageClassName}`}
      style={{ objectPosition: position }}
    />
    {children}
  </div>
);
