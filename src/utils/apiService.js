/**
 * Fashion VISTA API Service Connector
 * 
 * In this standalone frontend build, USE_MOCK is set to TRUE.
 * When connecting the future Python/Flask backend and PyTorch Virtual Try-On ML model:
 * 1. Set USE_MOCK to false
 * 2. Set API_BASE_URL to your Flask server (e.g. 'http://localhost:5000/api')
 * 3. The functions below will automatically route requests to the Flask endpoints.
 */

export const API_CONFIG = {
  USE_MOCK: true,
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  ENDPOINTS: {
    WARDROBE: '/wardrobe',
    RECOMMEND: '/stylist/recommend',
    VIRTUAL_TRY_ON: '/try-on/generate',
    HISTORY: '/history',
  }
};

/**
 * Fetch user's registered wardrobe items
 */
export const fetchWardrobe = async () => {
  if (API_CONFIG.USE_MOCK) {
    const saved = localStorage.getItem('fashion_vista_wardrobe');
    return saved ? JSON.parse(saved) : [];
  }
  const response = await fetch(`${API_CONFIG.API_BASE_URL}${API_CONFIG.ENDPOINTS.WARDROBE}`);
  return response.json();
};

/**
 * Request AI Outfit Recommendation from Flask ML model
 * @param {Object} preferences - { occasion, outfitType, colour, style, season, budget }
 * @param {Array} currentWardrobe - User's current wardrobe items
 */
export const requestOutfitRecommendation = async (preferences, currentWardrobe) => {
  if (API_CONFIG.USE_MOCK) {
    console.info('[Fashion VISTA Mock Engine] Generating recommendation from local state');
    return null; // Handled directly in FashionContext
  }
  const response = await fetch(`${API_CONFIG.API_BASE_URL}${API_CONFIG.ENDPOINTS.RECOMMEND}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ preferences, wardrobe: currentWardrobe })
  });
  return response.json();
};

/**
 * Submit User Photo + Garments to future PyTorch/Diffusion Try-On model
 * @param {string} userPhotoBase64 - Base64 or URL of user photo
 * @param {Array} garmentPhotos - Array of garment images/screenshots
 */
export const submitVirtualTryOn = async (userPhotoBase64, garmentPhotos) => {
  if (API_CONFIG.USE_MOCK) {
    console.info('[Fashion VISTA VTO Engine] Virtual Try-On simulation mode active');
    return {
      status: 'simulated',
      message: 'Your AI try-on result will appear here once the virtual try-on model is connected.'
    };
  }
  const response = await fetch(`${API_CONFIG.API_BASE_URL}${API_CONFIG.ENDPOINTS.VIRTUAL_TRY_ON}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_photo: userPhotoBase64, garments: garmentPhotos })
  });
  return response.json();
};
