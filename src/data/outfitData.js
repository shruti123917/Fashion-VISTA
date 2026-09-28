export const stylistStepOptions = {
  occasions: [
    { id: "college", label: "College", description: "Everyday campus, classes, labs & library" },
    { id: "casual", label: "Casual", description: "Cafes, meetups, errands & weekend downtime" },
    { id: "office", label: "Office", description: "Corporate poise, client meetings & smart workdays" },
    { id: "party", label: "Party", description: "Evening socials, cocktails & weekend nightlife" },
    { id: "wedding", label: "Wedding", description: "Celebrations, receptions & festive galas" },
    { id: "travel", label: "Travel", description: "Airports, road trips & holiday explorations" },
    { id: "traditional", label: "Traditional", description: "Cultural functions, pujas & family celebrations" }
  ],
  outfitTypes: [
    { id: "top", label: "Top" },
    { id: "shirt", label: "Shirt" },
    { id: "t-shirt", label: "T-Shirt" },
    { id: "dress", label: "Dress" },
    { id: "kurti", label: "Kurti" },
    { id: "saree", label: "Saree" },
    { id: "jeans", label: "Jeans" },
    { id: "trousers", label: "Trousers" },
    { id: "full-outfit", label: "Full Outfit" }
  ],
  colours: [
    { id: "black", label: "Black", hex: "#1F1F1F" },
    { id: "white", label: "White", hex: "#FFFFFF", border: true },
    { id: "blue", label: "Blue", hex: "#2B4C7E" },
    { id: "red", label: "Red", hex: "#9E2A2B" },
    { id: "pink", label: "Pink", hex: "#E09898" },
    { id: "green", label: "Green", hex: "#386641" },
    { id: "beige", label: "Beige", hex: "#D6CCC2" },
    { id: "brown", label: "Brown", hex: "#6F4E37" },
    { id: "any", label: "Any", hex: "linear-gradient(135deg, #eee 0%, #aaa 100%)" }
  ],
  styles: [
    { id: "casual", label: "Casual", description: "Relaxed, functional, understated ease" },
    { id: "formal", label: "Formal", description: "Sharp tailoring, structured silhouettes & polish" },
    { id: "traditional", label: "Traditional", description: "Authentic textiles, ethnic drapes & heritage" },
    { id: "western", label: "Western", description: "Contemporary silhouettes and urban outerwear" },
    { id: "streetwear", label: "Streetwear", description: "Bold volumes, graphic cues & athletic edges" },
    { id: "minimal", label: "Minimal", description: "Clean lines, neutral palette & intentional reduction" }
  ],
  seasons: [
    { id: "summer", label: "Summer", description: "Lightweight, breathable linen & airy cotton" },
    { id: "winter", label: "Winter", description: "Merino knits, tailored coats & warm layering" },
    { id: "monsoon", label: "Monsoon", description: "Quick-drying weaves, trench layers & practical shoes" },
    { id: "any", label: "Any", description: "Versatile climate-adaptive all-season capsule" }
  ]
};

export const defaultUserProfile = {
  name: "Shruti Sharma",
  handle: "@shrutistyles",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  bio: "Curating a conscious, high-rotation capsule wardrobe.",
  preferredStyles: ["Casual", "Minimal", "Traditional"],
  preferredColours: ["Black", "Beige", "Blue"],
  location: "Bengaluru, India",
  stats: {
    totalItems: 18,
    outfitsCurated: 12,
    wardrobeUtilization: "84%",
    savedSpend: "₹14,500"
  }
};
