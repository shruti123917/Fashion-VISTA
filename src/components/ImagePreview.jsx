import React from 'react';
import { RefreshCw, Trash2, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

export const ImagePreview = ({
  src,
  alt = "Uploaded image preview",
  onReplace,
  onRemove,
  aspectRatio = "aspect-[3/4]",
  badge = "Image Selected",
  className = ""
}) => {
  return (
    <div className={`relative bg-white rounded-2xl border border-taupe-300 overflow-hidden shadow-subtle p-3 ${className}`}>
      <div className={`relative ${aspectRatio} rounded-xl overflow-hidden bg-taupe-100`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-center"
        />

        {badge && (
          <div className="absolute top-3 left-3 bg-charcoal-900/85 backdrop-blur-sm text-cream-50 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>{badge}</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-3 pt-3 px-1">
        {onReplace && (
          <Button
            variant="secondary"
            size="sm"
            onClick={onReplace}
            iconLeft={<RefreshCw className="w-3.5 h-3.5" />}
          >
            Replace Image
          </Button>
        )}

        {onRemove && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onRemove}
            className="text-roseAccent-600 hover:text-roseAccent-700"
            iconLeft={<Trash2 className="w-3.5 h-3.5" />}
          >
            Remove
          </Button>
        )}
      </div>
    </div>
  );
};
