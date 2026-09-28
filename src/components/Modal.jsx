import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export const Modal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'max-w-xl'
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
        <div
          className={`relative w-full ${maxWidth} transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-2xl transition-all border border-taupe-200`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-taupe-200">
            <div>
              <h3 className="editorial-heading text-xl md:text-2xl font-semibold text-charcoal-900">{title}</h3>
              {subtitle && <p className="text-xs md:text-sm text-charcoal-500 mt-1">{subtitle}</p>}
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-charcoal-400 hover:text-charcoal-900 hover:bg-taupe-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 max-h-[75vh] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
