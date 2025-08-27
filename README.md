LocalSEOPro Website

A modern, fast, and scalable website for LocalSEOPro — helping businesses grow local visibility with Google Maps optimization, reviews, citations, and more.
Built with Vite, React, TypeScript, TailwindCSS, and shadcn/ui.

🔗 Live Preview: seo.madira.xyz

🚀 Features

Dynamic Blog System — Blogs managed via Firebase Firestore.

Contact Form Integration — Submissions saved to Firestore for lead management.

Service Pages — Each core service (Local SEO, GBP Optimization, Reviews, etc.) has a dedicated landing page.

Modern UI/UX — Dark theme with gold accents (#1E222A + #FED045) for a premium brand feel.

Responsive Design — Optimized for desktop, tablet, and mobile.

Reusable Components — Navigation, Footer, and PageBanner templates for consistency.

🛠️ Tech Stack

Frontend: React (TypeScript), Vite

Styling: Tailwind CSS, shadcn/ui, lucide-react icons

Backend/DB: Firebase (Firestore + Storage)

Forms: Firestore submission + honeypot spam protection

📂 Project Structure
src/
├─ components/ # Shared UI components (Navbar, Footer, PageBanner, etc.)
├─ pages/ # Page views (Home, About, Services, Blog, Contact, etc.)
├─ firebase.ts # Firebase config & Firestore initialization
└─ App.tsx # Routes & global layout

⚡ Getting Started

Clone and run locally:

# 1. Clone repository

git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# 2. Install dependencies

npm install

# 3. Set up environment

cp .env.example .env.local

# Add your Firebase credentials (from Firebase Console)

# 4. Start development server

npm run dev

🔑 Environment Variables

Create a .env.local file with:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=sender_id
VITE_FIREBASE_APP_ID=app_id

🌍 Deployment

Custom Domain: Configure in Project > Settings > Domains.

Manual Deploy (VPS/Nginx): Build with npm run build → upload dist/ → configure Nginx for SPA fallback.

📈 Roadmap

Core pages (Home, Services, About, Contact, Pricing)

Blog listing + detail pages (Firestore)

Contact form submission to Firestore

Blog Admin Panel (Firebase Auth + WYSIWYG editor)

Email/Slack notifications on new contact form leads

SEO Enhancements (meta tags, OG images, structured data)

👨‍💻 Authors

LocalSEOPro Team — From Canada to India, helping businesses dominate local search.
