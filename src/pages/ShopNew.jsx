import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFashion } from '../context/FashionContext';
import { UploadBox } from '../components/UploadBox';
import { ImagePreview } from '../components/ImagePreview';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { ShoppingBag, ArrowRight, Sparkles, AlertCircle, Info, ExternalLink } from 'lucide-react';

export const ShopNew = () => {
  const navigate = useNavigate();
  const { currentRecommendation, missingItemPhoto, setMissingItemPhoto, showToast } = useFashion();

  const missingItem = currentRecommendation.missingItem || {
    name: "Denim Jacket",
    category: "Layer",
    colour: "Indigo Blue",
    reason: "Adds architectural structure over oversized tops while shielding from air-conditioned lecture halls.",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&q=80"
  };

  const [currentImage, setCurrentImage] = useState(missingItemPhoto);

  const handleImageUploaded = (dataUrl) => {
    setCurrentImage(dataUrl);
    setMissingItemPhoto(dataUrl);
    showToast("Product screenshot loaded successfully!", "success");
  };

  const handleReplace = () => {
    setCurrentImage(null);
    setMissingItemPhoto(null);
  };

  const handleProceed = () => {
    if (!currentImage) {
      // Use fallback default sample if none uploaded
      setMissingItemPhoto(missingItem.image);
    }
    navigate('/try-on/upload');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-[11px] uppercase font-bold tracking-widest text-charcoal-500 bg-white px-3 py-1 rounded-full border border-taupe-200">
          Targeted Gap Fill
        </span>
        <h1 className="editorial-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal-900">
          Complete your outfit.
        </h1>
        <p className="text-sm text-charcoal-500">
          Upload any screenshot from Myntra, Zara, Ajio, or Pinterest to preview before purchasing.
        </p>
      </div>

      {/* MISSING ITEM CARD */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-taupe-200 shadow-card">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-28 h-36 rounded-xl overflow-hidden bg-taupe-100 shrink-0 border border-taupe-200">
            <img
              src={missingItem.image}
              alt={missingItem.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 space-y-2 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <Badge variant="missing" size="sm">
                MISSING ITEM
              </Badge>
              <Badge variant="tag" size="sm">
                {missingItem.category}
              </Badge>
            </div>
            <h3 className="editorial-heading text-2xl font-bold text-charcoal-900">
              {missingItem.name}
            </h3>
            <p className="text-xs text-roseAccent-600 font-medium">
              You're missing this item from your wardrobe.
            </p>
            <p className="text-xs text-charcoal-500 leading-relaxed max-w-lg">
              {missingItem.reason}
            </p>
          </div>
        </div>
      </div>

      {/* UPLOAD BOX / PREVIEW AREA */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-taupe-200 shadow-card space-y-6">
        <div>
          <h3 className="editorial-heading text-xl font-bold text-charcoal-900 mb-1">
            Upload a product screenshot
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-500">
            Shop on your preferred platform, take a screenshot and upload it here to visualize fit and compatibility.
          </p>
        </div>

        {currentImage ? (
          <div className="max-w-md mx-auto space-y-4">
            <ImagePreview
              src={currentImage}
              alt="Uploaded Product Screenshot"
              onReplace={handleReplace}
              onRemove={handleReplace}
              badge="Product Screenshot Attached"
              aspectRatio="aspect-[4/3]"
            />
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Garment extracted. Ready to merge into your virtual try-on canvas.</span>
            </div>
          </div>
        ) : (
          <UploadBox
            title="Upload a product screenshot"
            subtitle="Shop on your preferred platform, take a screenshot and upload it here."
            onImageSelected={handleImageUploaded}
            requirements={[
              "Supported: JPG, PNG, WEBP",
              "Maximum size: 10 MB",
              "Cropped to clothing item"
            ]}
          />
        )}

        {/* Clear Notice: No commerce / cart */}
        <div className="p-4 bg-[#FAF8F5] rounded-xl border border-taupe-200 text-xs text-charcoal-600 flex items-start gap-3">
          <Info className="w-4 h-4 text-taupe-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-charcoal-900">Independent Styling Assistant:</strong> Fashion VISTA does not sell or dropship items. We help you make conscious buying decisions on whatever platform you love before spending your money.
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between pt-4 border-t border-taupe-200">
          <Button
            variant="ghost"
            size="md"
            onClick={() => navigate('/try-existing')}
          >
            ← Back to Wardrobe Pick
          </Button>

          <Button
            variant="primary"
            size="md"
            onClick={handleProceed}
            iconRight={<ArrowRight className="w-4 h-4" />}
          >
            Use This Item →
          </Button>
        </div>

      </div>

    </div>
  );
};
