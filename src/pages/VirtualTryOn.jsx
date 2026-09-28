import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFashion } from '../context/FashionContext';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Sparkles, ArrowRight, User, Shirt, Cpu, Camera, Info } from 'lucide-react';

export const VirtualTryOn = () => {
  const navigate = useNavigate();
  const {
    userPhoto,
    currentRecommendation,
    missingItemPhoto
  } = useFashion();

  const items = currentRecommendation.items || [
    { name: "Black Top", category: "Top" },
    { name: "Blue Jeans", category: "Bottom" },
    { name: "White Sneakers", category: "Shoes" },
    { name: "Denim Jacket", category: "Layer" }
  ];

  const defaultUserImg = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-taupe-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-taupe-300 text-[11px] font-bold uppercase tracking-widest text-charcoal-700 mb-2 shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-charcoal-900" />
            VTO Fitting Room
          </div>
          <h1 className="editorial-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal-900">
            Virtual Try-On
          </h1>
          <p className="text-sm sm:text-base text-charcoal-500 mt-1">
            Simulating outfit composition against your uploaded posture and personal proportions.
          </p>
        </div>

        <Badge variant="neutral" size="md">
          <Cpu className="w-3.5 h-3.5 text-taupe-600" />
          AI VIRTUAL TRY-ON
        </Badge>
      </div>

      {/* BEFORE / AFTER COMPARISON INTERFACE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* LEFT: YOUR PHOTO */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-taupe-200 shadow-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-charcoal-700" />
                <h3 className="editorial-heading text-lg font-bold uppercase tracking-wider text-charcoal-900">
                  Your Photo
                </h3>
              </div>
              <button
                onClick={() => navigate('/try-on/upload')}
                className="text-xs text-charcoal-600 hover:text-black underline font-medium"
              >
                Change Photo
              </button>
            </div>

            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-taupe-100 border border-taupe-200 shadow-subtle">
              <img
                src={userPhoto || defaultUserImg}
                alt="Your original uploaded photo"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-3 left-3 bg-charcoal-900/80 backdrop-blur-sm text-cream-50 text-xs px-3 py-1 rounded-full font-medium">
                Original Posture
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-taupe-100 flex items-center justify-between text-xs text-charcoal-500">
            <span>Source: Calibrated Portrait</span>
            <span className="text-emerald-700 font-medium">✓ Ready for overlay</span>
          </div>
        </div>

        {/* RIGHT: TRY-ON PREVIEW (HONEST & POLISHED INTERFACE) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-taupe-200 shadow-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-charcoal-700" />
                <h3 className="editorial-heading text-lg font-bold uppercase tracking-wider text-charcoal-900">
                  Try-On Preview
                </h3>
              </div>
              <Badge variant="dark" size="xs">
                AI VIRTUAL TRY-ON
              </Badge>
            </div>

            {/* Editorial Preview Container */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#FBF9F6] border border-taupe-300 flex flex-col items-center justify-center p-6 text-center shadow-inner">
              
              {/* Subtle background placeholder graphic with model silhouette */}
              <div className="relative w-full h-full rounded-xl overflow-hidden border border-dashed border-taupe-300/80 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#FAF8F5] to-[#F2EBE1]">
                
                <div className="w-16 h-16 rounded-full bg-white border border-taupe-300 flex items-center justify-center mb-4 text-charcoal-700 shadow-sm">
                  <Shirt className="w-8 h-8 stroke-[1.5]" />
                </div>

                <h4 className="editorial-heading text-xl sm:text-2xl font-semibold text-charcoal-900 mb-2">
                  Virtual Try-On Preview
                </h4>

                <p className="text-xs sm:text-sm text-charcoal-600 max-w-sm mb-5 leading-relaxed font-normal">
                  Your AI try-on result will appear here once the virtual try-on model is connected.
                </p>

                {/* Simulated outfit swatches preview */}
                <div className="p-3 bg-white/90 backdrop-blur-sm rounded-xl border border-taupe-200 max-w-xs w-full shadow-subtle text-left space-y-1.5">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-charcoal-400">
                    Active Curation Pipeline
                  </div>
                  <div className="text-xs font-semibold text-charcoal-900 truncate">
                    {currentRecommendation.name}
                  </div>
                  <div className="text-[11px] text-charcoal-500">
                    3 Wardrobe Items + 1 Missing Screenshot
                  </div>
                </div>

              </div>

            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-taupe-100 flex items-center justify-between text-xs text-charcoal-500">
            <span>Model Node: PyTorch / Diffusion Ready</span>
            <span className="text-charcoal-800 font-medium">Pending ML Engine Sync</span>
          </div>
        </div>

      </div>

      {/* OUTFIT BEING TRIED STRIP */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-taupe-200 shadow-card space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-taupe-100">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal-500">
              Active Simulation Target
            </span>
            <h4 className="editorial-heading text-xl font-bold text-charcoal-900">
              Outfit Being Tried: {currentRecommendation.name}
            </h4>
          </div>
          <span className="text-xs text-charcoal-600 font-medium">
            4 Coordinated Elements
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#FAF8F5] border border-taupe-200 flex items-center gap-3"
            >
              <div className="w-10 h-12 rounded-lg bg-taupe-200 overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden">
                <div className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400">
                  {item.category}
                </div>
                <div className="text-xs font-semibold text-charcoal-900 truncate">
                  {item.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ACTION TO PROCEED TO ANALYSIS */}
      <div className="text-center pt-2">
        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate('/analysis')}
          iconRight={<ArrowRight className="w-4 h-4" />}
          className="shadow-card"
        >
          Analyze This Outfit →
        </Button>
      </div>

    </div>
  );
};
