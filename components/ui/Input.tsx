import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1 sm:gap-2">
        <label htmlFor={id} className="text-xs font-bold text-slate-900 uppercase tracking-wider">
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          className={`bg-slate-50 border border-outline-variant rounded-md px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-all duration-300 w-full ${
            error ? 'border-red-500 focus:ring-red-500' : ''
          } ${className}`}
          {...props}
        />
        {error && <span className="text-[14px] text-red-500 font-medium">{error}</span>}
      </div>
    );
  }
);
Input.displayName = 'Input';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1 sm:gap-2">
        <label htmlFor={id} className="text-xs font-bold text-slate-900 uppercase tracking-wider">
          {label}
        </label>
        <textarea
          id={id}
          ref={ref}
          rows={4}
          className={`bg-slate-50 border border-outline-variant rounded-md px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-all duration-300 w-full resize-none ${
            error ? 'border-red-500 focus:ring-red-500' : ''
          } ${className}`}
          {...props}
        />
        {error && <span className="text-[14px] text-red-500 font-medium">{error}</span>}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';
