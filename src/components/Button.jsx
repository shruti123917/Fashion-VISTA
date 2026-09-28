import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  iconLeft,
  iconRight,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-charcoal-900 disabled:opacity-50 disabled:cursor-not-allowed select-none tracking-wide";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5 uppercase tracking-wider font-semibold",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5"
  };

  const variantStyles = {
    primary: "bg-charcoal-900 text-[#FAF8F5] hover:bg-charcoal-800 active:bg-black shadow-sm",
    secondary: "bg-[#F5F2EC] text-charcoal-900 border border-taupe-300 hover:bg-[#EBE5DC] active:bg-[#DFD7CC]",
    outline: "bg-transparent text-charcoal-900 border border-charcoal-900 hover:bg-charcoal-900 hover:text-[#FAF8F5]",
    ghost: "bg-transparent text-charcoal-700 hover:bg-taupe-100 hover:text-charcoal-900",
    accent: "bg-roseAccent-500 text-white hover:bg-roseAccent-600 active:bg-roseAccent-700 shadow-sm",
    white: "bg-white text-charcoal-900 hover:bg-cream-50 border border-taupe-200 shadow-sm"
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`}
      {...props}
    >
      {iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
    </button>
  );
};
