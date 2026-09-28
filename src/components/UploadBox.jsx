import React, { useState, useRef } from 'react';
import { UploadCloud, Image as ImageIcon, FileCheck, AlertCircle } from 'lucide-react';
import { Button } from './Button';

export const UploadBox = ({
  title = "Upload an image",
  subtitle = "Drag and drop your file here, or click to browse",
  requirements = [
    "Supported: JPG, PNG, WEBP",
    "Maximum size: 10 MB",
    "Clear lighting and focus"
  ],
  onImageSelected,
  accept = "image/jpeg,image/png,image/webp",
  className = ""
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleFile = (file) => {
    setError(null);
    if (!file) return;

    if (!file.type.match('image/(jpeg|png|webp|jpg)')) {
      setError("Please upload a valid JPG, PNG, or WEBP image.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("File size exceeds 10 MB. Please choose a smaller image.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (onImageSelected) {
        onImageSelected(e.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center transition-all duration-300 cursor-pointer ${
          isDragging
            ? 'border-charcoal-900 bg-taupe-100/70 scale-[0.99]'
            : 'border-taupe-300 hover:border-charcoal-700 bg-white/70 hover:bg-white'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleChange}
          className="hidden"
        />

        <div className="w-16 h-16 rounded-full bg-taupe-100 mx-auto flex items-center justify-center mb-4 text-charcoal-700">
          <UploadCloud className="w-8 h-8 stroke-[1.5]" />
        </div>

        <h4 className="editorial-heading text-lg sm:text-xl font-bold text-charcoal-900 mb-1">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-charcoal-500 mb-5 max-w-md mx-auto">
          {subtitle}
        </p>

        <div className="inline-flex">
          <Button variant="secondary" size="sm" type="button" onClick={(e) => {
            e.stopPropagation();
            fileInputRef.current?.click();
          }}>
            Browse Files
          </Button>
        </div>

        {/* Requirements */}
        {requirements && requirements.length > 0 && (
          <div className="mt-6 pt-5 border-t border-taupe-200/70 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] text-taupe-600 font-medium">
            {requirements.map((req, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                {req}
              </span>
            ))}
          </div>
        )}
      </div>

      {error && (
        <div className="mt-3 flex items-center gap-2 p-3 rounded-lg bg-roseAccent-50 border border-roseAccent-200 text-xs text-roseAccent-700">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
