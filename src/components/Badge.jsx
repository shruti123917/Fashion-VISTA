import React from 'react';

export const Badge = ({
  children,
  variant = 'neutral',
  size = 'sm',
  className = ''
}) => {
  const baseStyles = "inline-flex items-center gap-1.5 rounded-full font-medium tracking-wider uppercase";

  const sizeStyles = {
    xs: "px-2 py-0.5 text-[10px]",
    sm: "px-2.5 py-1 text-xs",
    md: "px-3.5 py-1.5 text-xs font-semibold"
  };

  const variantStyles = {
    neutral: "bg-taupe-100 text-charcoal-700 border border-taupe-200",
    inWardrobe: "bg-[#EEF7F2] text-[#246B43] border border-[#CDE5D6]",
    missing: "bg-roseAccent-50 text-roseAccent-600 border border-roseAccent-200",
    dark: "bg-charcoal-900 text-cream-50",
    accent: "bg-roseAccent-100 text-roseAccent-600 border border-roseAccent-200",
    outline: "bg-transparent text-charcoal-600 border border-taupe-300",
    tag: "bg-white text-charcoal-700 border border-taupe-200"
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size] || sizeStyles.sm} ${variantStyles[variant] || variantStyles.neutral} ${className}`}>
      {children}
    </span>
  );
};
