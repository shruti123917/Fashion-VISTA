import React from 'react';

export const Card = ({
  children,
  className = '',
  hover = false,
  bordered = true,
  onClick,
  as: Component = 'div',
  ...props
}) => {
  return (
    <Component
      onClick={onClick}
      className={`bg-white rounded-xl ${bordered ? 'border border-taupe-200' : ''} shadow-subtle ${
        hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover cursor-pointer' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
