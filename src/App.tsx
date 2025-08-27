import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetail from "./pages/BlogDetail";

// MAIN PAGES
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Blogs from "./pages/Blogs";

// SERVICES PAGES
import LocalSEO from "./pages/services/LocalSEO";
import GoogleBusinessProfile from "./pages/services/GoogleBusinessProfile";
import ReviewsReputation from "./pages/services/ReviewsReputation";
import CitationBuilding from "./pages/services/CitationBuilding";
import WebsiteSEO from "./pages/services/WebsiteSEO";
import GoogleAds from "./pages/services/GoogleAds";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* PAGES */}
          <Route path="/" element={<Index />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />

          {/* SERVICES ROUTES */}
          <Route path="/services/local-seo" element={<LocalSEO />} />
          <Route
            path="/services/google-business-profile"
            element={<GoogleBusinessProfile />}
          />
          <Route
            path="/services/reviews-reputation"
            element={<ReviewsReputation />}
          />
          <Route
            path="/services/citation-building"
            element={<CitationBuilding />}
          />
          <Route path="/services/website-seo" element={<WebsiteSEO />} />
          <Route path="/services/google-ads" element={<GoogleAds />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

/*

VITE_FIREBASE_API_KEY=AIzaSyBy_wLmnL6QI0RyKbiEAHoQAkksehn9Yz4
VITE_FIREBASE_AUTH_DOMAIN=seo-agency-9cab9.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seo-agency-9cab9
VITE_FIREBASE_STORAGE_BUCKET=seo-agency-9cab9.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=654193662335
VITE_FIREBASE_APP_ID=1:654193662335:web:2ab128a192eb5baee4e24a

*/
