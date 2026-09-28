import React from 'react';
import { Check } from 'lucide-react';

export const PreferenceCard = ({
  title,
  description,
  colorCircle,
  selected = false,
  onClick,
  className = ""
}) => {
  return (
    <div
      onClick={onClick}
      className={`group relative rounded-xl p-5 border transition-all duration-200 cursor-pointer select-none ${
        selected
          ? 'bg-white border-charcoal-900 ring-2 ring-charcoal-900 shadow-card'
          : 'bg-white/70 border-taupe-200 hover:border-taupe-400 hover:bg-white hover:shadow-subtle'
      } ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {colorCircle && (
            <div
              className={`w-6 h-6 rounded-full shrink-0 shadow-inner ${colorCircle.border ? 'border border-taupe-300' : ''}`}
              style={{ background: colorCircle.hex }}
            />
          )}
          <div>
            <h4 className="font-semibold text-sm sm:text-base text-charcoal-900 group-hover:text-black">
              {title}
            </h4>
            {description && (
              <p className="text-xs text-charcoal-500 mt-1 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>

        <div
          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${
            selected
              ? 'bg-charcoal-900 text-white'
              : 'border border-taupe-300 text-transparent group-hover:border-taupe-400'
          }`}
        >
          <Check className="w-3 h-3 stroke-[3]" />
        </div>
      </div>
    </div>
  );
};
