import React from 'react';
import { PreferenceCard } from './PreferenceCard';

export const PreferenceSelector = ({
  options = [],
  selectedValue,
  onSelect,
  gridCols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  isColor = false
}) => {
  return (
    <div className={`grid ${gridCols} gap-3 sm:gap-4`}>
      {options.map((opt) => {
        const isSelected = selectedValue === opt.label || selectedValue === opt.id;
        return (
          <PreferenceCard
            key={opt.id}
            title={opt.label}
            description={opt.description}
            colorCircle={isColor ? { hex: opt.hex, border: opt.border } : null}
            selected={isSelected}
            onClick={() => onSelect(opt.label)}
          />
        );
      })}
    </div>
  );
};
