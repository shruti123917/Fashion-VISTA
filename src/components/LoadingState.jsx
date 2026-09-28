import React from 'react';
import { Sparkles } from 'lucide-react';

export const LoadingState = ({
  message = "Curating your wardrobe harmony...",
  subtext = "Fashion VISTA is evaluating what you own and calculating compatibility."
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center min-h-[360px]">
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-full border-2 border-taupe-200 border-t-charcoal-900 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-charcoal-900 animate-pulse" />
        </div>
      </div>
      <h3 className="editorial-heading text-xl font-medium text-charcoal-900 mb-2">{message}</h3>
      <p className="text-sm text-charcoal-500 max-w-md mx-auto leading-relaxed">{subtext}</p>
    </div>
  );
};
