import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Shirt, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-20 h-20 rounded-full bg-taupe-100 mx-auto flex items-center justify-center text-charcoal-700">
        <Shirt className="w-10 h-10 stroke-[1.5]" />
      </div>
      <h1 className="editorial-heading text-4xl font-bold text-charcoal-900">
        Page Not Found
      </h1>
      <p className="text-sm text-charcoal-500 max-w-md mx-auto">
        The styling page or piece you are searching for does not exist in this catalog.
      </p>
      <div>
        <Button
          variant="primary"
          size="md"
          onClick={() => navigate('/')}
          iconLeft={<ArrowLeft className="w-4 h-4" />}
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};
