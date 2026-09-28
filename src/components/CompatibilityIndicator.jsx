import React from 'react';
import { Check, Info, ShoppingBag } from 'lucide-react';

export const CompatibilityIndicator = ({
  compatibility = {
    occasion: "Suitable for College",
    style: "Casual",
    colour: "Black + Blue",
    wardrobe: "3 / 4 items owned",
    purchase: "1 item needed"
  },
  className = ""
}) => {
  const metrics = [
    { label: "Occasion", value: compatibility.occasion, status: "match" },
    { label: "Style", value: compatibility.style, status: "match" },
    { label: "Colour Palette", value: compatibility.colour, status: "match" },
    { label: "Wardrobe Integration", value: compatibility.wardrobe, status: "match" },
    { label: "Purchase Requirement", value: compatibility.purchase, status: "info" },
  ];

  return (
    <div className={`bg-white rounded-2xl border border-taupe-200 p-6 shadow-subtle ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <h4 className="editorial-heading text-base font-bold uppercase tracking-wider text-charcoal-900">
          Recommendation Compatibility
        </h4>
        <span className="text-[10px] uppercase font-bold tracking-widest bg-taupe-100 text-charcoal-600 px-2 py-0.5 rounded">
          Algorithmic Fit
        </span>
      </div>
      <p className="text-xs text-charcoal-500 mb-5">
        Compatibility indicators reflect style taxonomy alignment and current wardrobe inventory.
      </p>

      <div className="space-y-3">
        {metrics.map((m, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-[#FAF8F5] border border-taupe-200/70 text-xs"
          >
            <span className="text-charcoal-500 font-medium">{m.label}</span>
            <div className="flex items-center gap-1.5 font-semibold text-charcoal-900">
              {m.status === 'match' ? (
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
              ) : (
                <ShoppingBag className="w-3.5 h-3.5 text-roseAccent-500" />
              )}
              <span>{m.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
