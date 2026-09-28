import React from 'react';
import { useFashion } from '../context/FashionContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = () => {
  const { toast } = useFashion();

  if (!toast.isVisible) return null;

  const icons = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-700" />,
    error: <AlertCircle className="w-4 h-4 text-roseAccent-600" />,
    info: <Info className="w-4 h-4 text-taupe-600" />
  };

  const bgStyles = {
    success: 'bg-[#F4F9F5] border-emerald-200 text-charcoal-800',
    error: 'bg-roseAccent-50 border-roseAccent-200 text-charcoal-800',
    info: 'bg-[#FDFBF7] border-taupe-300 text-charcoal-800'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 transition-all duration-300 transform translate-y-0 opacity-100 max-w-sm">
      <div className={`flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg ${bgStyles[toast.type] || bgStyles.info}`}>
        {icons[toast.type] || icons.info}
        <p className="text-sm font-medium tracking-tight pr-2">{toast.message}</p>
      </div>
    </div>
  );
};
