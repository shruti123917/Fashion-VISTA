# FASHION VISTA

> **"Try what you own. Shop only what you need."**  
> *AI-Based Personalized Fashion Decision Assistant with Virtual Wardrobe and Virtual Try-On*

---

## 🌟 Executive Summary

**Fashion VISTA** is an AI-powered personal fashion decision assistant designed to eliminate wasteful hyper-consumerism by enforcing a conscious styling rule:
> **"Check what I already own before suggesting what I should buy."**

Instead of pushing endless new garments, Fashion VISTA catalogs your existing wardrobe, compares it against AI-curated outfit blueprints for specific occasions, isolates only true missing pieces (e.g., a single jacket), and allows you to upload product screenshots to preview complete outfits virtually before spending money.

---

## 🎨 Design Aesthetics & Editorial Style

- **Color Palette**: Warm ivory & cream (`#FAF8F5`, `#FAF6F0`), charcoal & black typography (`#141414`, `#2D2D2D`), delicate taupe accents (`#E8E2D8`), and subtle muted rose accents (`#C06B6B`).
- **Typography**: Editorial luxury serif headings (**Playfair Display**, **Cormorant Garamond**) paired with high-legibility geometric sans-serif (**Plus Jakarta Sans**).
- **Cards & Structure**: White cards with delicate 1px borders, gentle shadows (`shadow-subtle`, `shadow-card`), generous editorial whitespace, and smooth hover transitions.

---

## 🛠 Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS with custom palette & luxury shadows
- **Routing**: React Router (`react-router-dom` v7)
- **Icons**: Lucide React
- **State & Storage**: React Context API (`FashionContext`) + Browser `localStorage`

---

## 🚀 How to Run

1. Clone or open the repository:
   ```bash
   cd "Fashion-VISTA"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```

4. Open your browser at:
   ```
   http://localhost:5173/
   ```

5. Build for production:
   ```bash
   npm run build
   ```

---

## 🗺 Application Routes

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | **Home** | Editorial landing hero, floating match cards, 4-step framework, USP banner, 3 feature pillars, and call to action. |
| `/stylist` | **AI Stylist** | Interactive 6-step questionnaire (`01/06` progress): Occasion, Outfit Type, Colour, Style, Season, Budget. |
| `/recommendations` | **Recommendations** | Visual showcase of "Urban Casual", 4 outfit pieces with In-Wardrobe/Missing status, 75% Wardrobe Match bar, Why This Outfit reasoning, and 3 alternatives. |
| `/wardrobe` | **My Wardrobe** | Virtual closet inventory (24+ items), category filtering, search, Add Clothing modal with file upload/presets, and Edit/Delete controls. |
| `/try-existing` | **Try Existing** | Category slot selector (`Top`, `Bottom`, `Shoes`, `Layer`) for matching owned pieces to recommended blueprint. |
| `/shop-new` | **Shop New** | Missing item uploader. Allows drag-and-drop screenshots of desired product from Myntra/Zara without carts or commerce. |
| `/try-on/upload` | **Upload User Photo** | Dedicated photo upload area with full-body criteria checklist, local preview, and demo sample toggle. |
| `/try-on` | **Virtual Try-On** | Editorial split-screen interface (Your Photo vs Try-On Preview) with honest ML model pending notice and outfit element summary. |
| `/analysis` | **Outfit Analysis** | Visual outfit render, Recommendation Compatibility metrics, and highlighted closet utilization ratio. |
| `/history` | **History** | Style history log with dates, wardrobe match percentages, missing piece records, and detail inspection modals. |
| `/profile` | **Profile** | User capsule metrics, 84% closet rotation rate, saved spend counter, and editable style preferences. |

---

## 🧩 Reusable Components Created

- [`Navbar`](src/components/Navbar.jsx) — Editorial top navigation with logo, links, profile shortcut, and mobile drawer.
- [`JourneyProgress`](src/components/JourneyProgress.jsx) — Visual workflow stepper guiding the user through the 7-step pipeline.
- [`Button`](src/components/Button.jsx) — Styled buttons (`primary`, `secondary`, `outline`, `accent`, `white`, `ghost`).
- [`Card`](src/components/Card.jsx) — Reusable white surface with delicate border and hover lift.
- [`Badge`](src/components/Badge.jsx) — Indicators for `inWardrobe`, `missing`, `tag`, and `dark`.
- [`ClothingCard`](src/components/ClothingCard.jsx) — Garment card with status tags, category pills, and selectable checkmark state.
- [`WardrobeCard`](src/components/WardrobeCard.jsx) — Wardrobe item card with edit and delete controls.
- [`OutfitCard`](src/components/OutfitCard.jsx) — Multi-item outfit preview card used in Alternatives and History.
- [`WardrobeMatch`](src/components/WardrobeMatch.jsx) — Prominent differentiator section with large `3 / 4` ratio, progress bar, and item checklist.
- [`CompatibilityIndicator`](src/components/CompatibilityIndicator.jsx) — Honest compatibility taxonomy breakdown.
- [`RecommendationReason`](src/components/RecommendationReason.jsx) — Curated algorithmic justification checklist.
- [`PreferenceCard`](src/components/PreferenceCard.jsx) — Selectable option card for the AI Stylist form.
- [`PreferenceSelector`](src/components/PreferenceSelector.jsx) — Grid wrapper for preferences.
- [`UploadBox`](src/components/UploadBox.jsx) — Drag-and-drop file upload container with 10 MB limit and image validation.
- [`ImagePreview`](src/components/ImagePreview.jsx) — Upload preview with replace and remove triggers.
- [`ProgressBar`](src/components/ProgressBar.jsx) — Smooth animated progress bar.
- [`Modal`](src/components/Modal.jsx) — Accessible modal dialog with backdrop blur and escape key listener.
- [`Toast`](src/components/Toast.jsx) — Non-intrusive floating toast notifications for user actions.
- [`LoadingState`](src/components/LoadingState.jsx) — Spinning spark indicator during styling computation.
- [`EmptyState`](src/components/EmptyState.jsx) — Dashed placeholder for empty closet filters or search queries.
- [`Footer`](src/components/Footer.jsx) — Luxury footer with brand philosophy and workflow links.

---

## 💾 Mock Data & Local Storage Architecture

All mock data files reside in [`src/data/`](src/data/):
- `wardrobeData.js` — Initial 18+ realistic closet items across Tops, Bottoms, Dresses, Shoes, and Accessories.
- `recommendationData.js` — "Urban Casual" default curation + alternate styles (Traditional Festive, Executive Office).
- `outfitData.js` — Options for the 6-step stylist questionnaire and default user profile.
- `historyData.js` — Historical outfit recommendations and match ratios.

State is synchronized to browser `localStorage` under:
- `fashion_vista_wardrobe`
- `fashion_vista_preferences`
- `fashion_vista_recommendation`
- `fashion_vista_try_existing`
- `fashion_vista_user_photo`
- `fashion_vista_missing_photo`
- `fashion_vista_history`

---

## 🔌 Future Flask & ML Backend Integration

The frontend includes a pre-configured API connector at [`src/utils/apiService.js`](src/utils/apiService.js).

When ready to connect the Flask API:
1. In `src/utils/apiService.js`, change `USE_MOCK: true` to `USE_MOCK: false`.
2. Set your Flask server URL in `.env` as `VITE_API_BASE_URL=http://localhost:5000/api`.
3. Target Flask routes:
   - `GET /api/wardrobe` & `POST /api/wardrobe` → Wardrobe CRUD
   - `POST /api/stylist/recommend` → KNN / Rule-based outfit recommendation engine
   - `POST /api/try-on/generate` → PyTorch Diffusion Virtual Try-On model
   - `GET /api/history` → Stored outfit logs
