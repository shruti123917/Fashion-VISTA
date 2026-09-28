import React from 'react';
import { CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

export const RecommendationReason = ({
  reasons = [],
  title = "WHY THIS OUTFIT?",
  subtitle = "Algorithmic harmony engineered around what you already own",
  className = ""
}) => {
  return (
    <div className={`bg-white rounded-2xl border border-taupe-200 p-6 sm:p-7 shadow-subtle ${className}`}>
      <div className="flex items-center gap-2 mb-1">
        <Sparkles className="w-4 h-4 text-charcoal-800" />
        <h3 className="editorial-heading text-lg font-bold tracking-wider text-charcoal-900 uppercase">
          {title}
        </h3>
      </div>
      {subtitle && (
        <p className="text-xs text-charcoal-500 mb-5">{subtitle}</p>
      )}

      <ul className="space-y-3">
        {reasons.map((reason, idx) => (
          <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
            <span className="mt-0.5 w-4 h-4 rounded-full bg-taupe-100 flex items-center justify-center shrink-0 text-charcoal-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-charcoal-900" />
            </span>
            <span>{reason}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-4 border-t border-taupe-100 flex items-center gap-2 text-[11px] text-taupe-600 font-medium uppercase tracking-wider">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>Wardrobe-first curation verified</span>
      </div>
    </div>
  );
};
