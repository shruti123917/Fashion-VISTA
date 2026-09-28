import React from 'react';
import { Button } from './Button';
import { Sparkles, Shirt } from 'lucide-react';

export const EmptyState = ({
  icon: Icon = Shirt,
  title = "No items found",
  description = "There are no garments matching your criteria. Try adjusting filters or adding a new piece to your wardrobe.",
  actionLabel,
  onAction,
  className = ""
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-dashed border-taupe-300 bg-white/60 my-6 ${className}`}>
      <div className="w-16 h-16 rounded-full bg-taupe-100 flex items-center justify-center mb-4 text-charcoal-700">
        <Icon className="w-8 h-8 stroke-[1.5]" />
      </div>
      <h3 className="editorial-heading text-xl font-medium text-charcoal-900 mb-2">{title}</h3>
      <p className="text-sm text-charcoal-500 max-w-sm mb-6 leading-relaxed">{description}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction} variant="primary" size="md">
          {actionLabel}
        </Button>
      )}
    </div>
  );
};
