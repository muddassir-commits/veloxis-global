'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../../data/testimonials';
import { SectionLabel } from '../ui/SectionLabel';
import { Card } from '../ui/Card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInViewAnimation } from '../../lib/useInViewAnimation';

export const TestimonialsSlider: React.FC = () => {
  const { getSectionAnimation } = useInViewAnimation();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const current = testimonials[index];

  // Slide animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 80 : -80,
      opacity: 0
    })
  };

  // Generate author initials for avatar
  const getInitials = (name: string) => {
    if (!name) return 'VG';
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name[0].toUpperCase();
  };

  return (
    <motion.section 
      {...getSectionAnimation()}
      className="bg-slate-50 py-section-gap relative overflow-hidden" 
      id="testimonials"
    >
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <SectionLabel className="text-center">CLIENT LOVE</SectionLabel>
          <h2 className="text-headline-lg-mobile sm:text-headline-lg font-bold text-slate-900 tracking-tight leading-tight">
            What Our Clients Say About Working With Veloxis Global
          </h2>
        </div>

        {/* Testimonials Slider Area */}
        <div className="relative max-w-3xl mx-auto min-h-[340px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="w-full cursor-grab active:cursor-grabbing touch-pan-y"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, info) => {
                const threshold = 50;
                if (info.offset.x < -threshold) {
                  handleNext();
                } else if (info.offset.x > threshold) {
                  handlePrev();
                }
              }}
            >
              <Card hoverable={false} className="p-10 border border-slate-100 text-center bg-white rounded-xl shadow-sm">
                {/* Star Row: 5 x Sunset Orange Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(current.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-sunset-orange text-sunset-orange" />
                  ))}
                </div>

                {/* Quote [body-lg, italic, slate-700] */}
                <blockquote className="text-body-lg text-slate-700 italic leading-relaxed mb-8">
                  "{current.text}"
                </blockquote>

                {/* Author Row: Avatar + Name + Role */}
                <div className="flex items-center justify-center gap-4 border-t border-slate-50 pt-6">
                  {/* Initials Avatar */}
                  <div className="w-12 h-12 rounded-full bg-royal-blue text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                    {getInitials(current.author)}
                  </div>
                  <div className="text-left">
                    <cite className="not-italic font-semibold text-slate-900 text-base block">
                      {current.author}
                    </cite>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      {current.role}, {current.company} · {current.location}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 sm:-left-16 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-900 hover:bg-slate-50 shadow-md transition-colors"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute -right-4 sm:-right-16 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-900 hover:bg-slate-50 shadow-md transition-colors"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot Indicators: Royal Blue active dot, Slate-300 inactive */}
        <div className="flex justify-center gap-1 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > index ? 1 : -1);
                setIndex(idx);
              }}
              className="w-11 h-11 flex items-center justify-center focus:outline-none"
              aria-label={`Go to testimonial ${idx + 1}`}
            >
              <span className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === index ? 'bg-royal-blue w-6' : 'bg-slate-300 hover:bg-slate-400 w-2.5'
              }`} />
            </button>
          ))}
        </div>

        {/* Verified Badge */}
        <div className="text-center mt-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full bg-white shadow-sm select-none"
          >
            <span className="text-xs font-bold text-slate-600">Client Rating:</span>
            <div className="flex items-center gap-0.5">
              <Star className="w-3.5 h-3.5 fill-sunset-orange text-sunset-orange" />
              <span className="text-xs font-bold text-slate-900">4.9/5</span>
            </div>
            <span className="text-slate-300">|</span>
            <span className="text-xs font-bold text-slate-500">250+ Verified Client Projects</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
