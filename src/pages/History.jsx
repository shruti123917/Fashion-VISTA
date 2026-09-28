import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFashion } from '../context/FashionContext';
import { OutfitCard } from '../components/OutfitCard';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Modal } from '../components/Modal';
import { History as HistoryIcon, Calendar, CheckCircle2, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';

export const History = () => {
  const navigate = useNavigate();
  const { history, currentRecommendation } = useFashion();
  const [selectedHistoryItem, setSelectedHistoryItem] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-taupe-200">
        <div>
          <span className="text-[11px] uppercase font-bold tracking-widest text-charcoal-500 bg-white px-3 py-1 rounded-full border border-taupe-200">
            Archive & Rotation Log
          </span>
          <h1 className="editorial-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal-900 mt-2">
            Your Style History
          </h1>
          <p className="text-sm sm:text-base text-charcoal-500 mt-1">
            Your previous outfit recommendations and wardrobe match records.
          </p>
        </div>

        <Button
          variant="secondary"
          size="md"
          onClick={() => navigate('/stylist')}
          iconLeft={<Sparkles className="w-4 h-4" />}
        >
          Curate New Outfit
        </Button>
      </div>

      {/* History Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {history.map((entry) => (
          <div
            key={entry.id}
            className="group bg-white rounded-2xl overflow-hidden border border-taupe-200 hover:border-taupe-400 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top image banner */}
            <div className="relative aspect-[4/3] bg-taupe-100 overflow-hidden">
              <img
                src={entry.image}
                alt={entry.outfitName}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-charcoal-900/90 text-cream-50 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                <Calendar className="w-3 h-3 text-taupe-300" />
                <span>{entry.date}</span>
              </div>
              <div className="absolute top-3 right-3">
                <Badge variant={entry.percentage === 100 ? 'inWardrobe' : 'tag'} size="xs">
                  {entry.wardrobeMatch}
                </Badge>
              </div>
            </div>

            {/* Content info */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="editorial-heading text-xl font-bold text-charcoal-900 group-hover:text-black">
                  {entry.outfitName}
                </h3>
                <p className="text-xs text-charcoal-500 mt-1 line-clamp-2 leading-relaxed">
                  {entry.outfitSummary}
                </p>

                {/* Missing items display */}
                <div className="mt-4 pt-3 border-t border-taupe-100 flex items-center justify-between text-xs">
                  <span className="text-charcoal-500">Missing Items:</span>
                  {entry.missingItems && entry.missingItems.length > 0 ? (
                    <span className="text-roseAccent-600 font-semibold flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {entry.missingItems.join(', ')}
                    </span>
                  ) : (
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      None (100% Owned)
                    </span>
                  )}
                </div>
              </div>

              {/* View Outfit action button */}
              <button
                onClick={() => setSelectedHistoryItem(entry)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#FAF8F5] text-charcoal-900 text-xs font-semibold border border-taupe-300 hover:bg-charcoal-900 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <span>View Outfit →</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* DETAIL MODAL FOR HISTORICAL OUTFIT */}
      <Modal
        isOpen={Boolean(selectedHistoryItem)}
        onClose={() => setSelectedHistoryItem(null)}
        title={selectedHistoryItem?.outfitName || "Historical Outfit"}
        subtitle={`Recorded on ${selectedHistoryItem?.fullDate}`}
      >
        {selectedHistoryItem && (
          <div className="space-y-6">
            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-taupe-100">
              <img
                src={selectedHistoryItem.image}
                alt={selectedHistoryItem.outfitName}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-taupe-200 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-charcoal-500">Wardrobe Match:</span>
                <span className="font-semibold text-charcoal-900">{selectedHistoryItem.wardrobeMatch}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal-500">Occasion:</span>
                <span className="font-semibold text-charcoal-900">{selectedHistoryItem.occasion}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal-500">Style:</span>
                <span className="font-semibold text-charcoal-900">{selectedHistoryItem.style}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal-500">Pieces:</span>
                <span className="font-semibold text-charcoal-900">{selectedHistoryItem.outfitSummary}</span>
              </div>
              {selectedHistoryItem.decision && (
                <div className="pt-2 border-t border-taupe-200 text-charcoal-600 italic">
                  "{selectedHistoryItem.decision}"
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <Button
                variant="ghost"
                size="md"
                onClick={() => setSelectedHistoryItem(null)}
              >
                Close
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setSelectedHistoryItem(null);
                  navigate('/recommendations');
                }}
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Load into Recommendations
              </Button>
            </div>
          </div>
        )}
      </Modal>

    </div>
  );
};
