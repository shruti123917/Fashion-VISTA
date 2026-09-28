import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFashion } from '../context/FashionContext';
import { CompatibilityIndicator } from '../components/CompatibilityIndicator';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Check, Sparkles, RefreshCw, Shirt, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export const OutfitAnalysis = () => {
  const navigate = useNavigate();
  const { currentRecommendation, userPhoto } = useFashion();

  const {
    name,
    heroImage,
    compatibility = {
      occasion: "Suitable for College",
      style: "Casual",
      colour: "Black + Blue",
      wardrobe: "3 / 4 items owned",
      purchase: "1 item needed"
    }
  } = currentRecommendation;

  const analysisPoints = [
    "Matches selected occasion",
    "Matches selected style",
    "Matches preferred colour",
    "Compatible outfit combination",
    "Uses existing wardrobe items",
    "Minimizes unnecessary purchases"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-taupe-200">
        <div>
          <span className="text-[11px] uppercase font-bold tracking-widest text-charcoal-500 bg-white px-3 py-1 rounded-full border border-taupe-200">
            Step 06 / Strategic Decision
          </span>
          <h1 className="editorial-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal-900 mt-2">
            Your outfit, analyzed.
          </h1>
          <p className="text-sm sm:text-base text-charcoal-500 mt-1">
            Holistic assessment of aesthetic harmony, occasion utility, and closet utilization.
          </p>
        </div>

        <Badge variant="inWardrobe" size="md">
          <ShieldCheck className="w-3.5 h-3.5" />
          Wardrobe First Verified
        </Badge>
      </div>

      {/* TOP SECTION: LARGE TRY-ON PREVIEW BESIDE COMPATIBILITY INDICATORS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Large Try-On Preview */}
        <div className="lg:col-span-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-taupe-200 shadow-card space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-charcoal-500">
                Visual Ensemble Render
              </span>
              <span className="editorial-heading text-lg font-bold text-charcoal-900">
                {name}
              </span>
            </div>

            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-taupe-100 border border-taupe-200 shadow-subtle">
              <img
                src={heroImage}
                alt="Ensemble analysis visual"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest bg-white/20 backdrop-blur-md px-2 py-0.5 rounded">
                  Wardrobe Optimized
                </span>
                <p className="editorial-heading text-xl font-bold mt-1">
                  High-Rotation Capsule Pairing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Compatibility Indicators Panel */}
        <div className="lg:col-span-6 space-y-6">
          <CompatibilityIndicator compatibility={compatibility} />

          {/* LARGE HIGHLIGHT CARD (Key Project Concept) */}
          <div className="bg-gradient-to-br from-charcoal-900 to-[#2A2A2A] text-cream-50 rounded-2xl p-6 sm:p-8 shadow-card space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800">
              Wardrobe Utilization Victory
            </span>

            <h3 className="editorial-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">
              YOU ALREADY OWN MOST OF THIS LOOK.
            </h3>

            <p className="editorial-sub text-lg italic text-taupe-300">
              "Only 1 new item may need to be purchased."
            </p>

            <p className="text-xs text-taupe-300 leading-relaxed font-light">
              By selecting 3 garments already residing in your bedroom wardrobe, you preserve your budget and minimize the carbon footprint of impulse e-commerce purchases.
            </p>
          </div>
        </div>

      </section>

      {/* WHY THIS OUTFIT? EXPLANATION SECTION */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-taupe-200 shadow-card space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-charcoal-500">
            Stylistic Justification
          </span>
          <h2 className="editorial-heading text-2xl sm:text-4xl font-semibold text-charcoal-900">
            Why this outfit?
          </h2>
          <p className="editorial-sub text-xl sm:text-2xl italic text-charcoal-800 leading-relaxed">
            "This outfit matches your selected casual college style while making maximum use of items already in your wardrobe."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-taupe-200">
          {analysisPoints.map((point, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF8F5] border border-taupe-200/80"
            >
              <div className="w-5 h-5 rounded-full bg-charcoal-900 text-cream-50 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-charcoal-800">
                {point}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ACTION CONTROLS */}
      <section className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Button
          variant="secondary"
          size="lg"
          onClick={() => navigate('/stylist')}
          iconLeft={<RefreshCw className="w-4 h-4" />}
        >
          Try Another Outfit
        </Button>

        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate('/recommendations')}
          iconRight={<ArrowRight className="w-4 h-4" />}
        >
          View Alternatives
        </Button>
      </section>

    </div>
  );
};
