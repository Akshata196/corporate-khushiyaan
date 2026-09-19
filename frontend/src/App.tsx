import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { BrandIntro } from '@/components/BrandIntro';
import { GiftingSolutions } from '@/components/GiftingSolutions';
import { FeaturedCategories } from '@/components/FeaturedCategories';
import { Customization } from '@/components/Customization';
import { WhyUs } from '@/components/WhyUs';
import { OurProcess } from '@/components/OurProcess';
import { Gallery } from '@/components/Gallery';
import { QuoteSection } from '@/components/QuoteSection';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

import { AdminLogin } from '@/pages/admin/AdminLogin';
import { AdminDashboard } from '@/pages/admin/AdminDashboard';
import { ProtectedRoute } from '@/components/admin/ProtectedRoute';

function HomePage() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />

      <main>
        <Hero />
        <BrandIntro />
        <GiftingSolutions />
        <FeaturedCategories />
        <Customization />
        <WhyUs />
        <OurProcess />
        <Gallery />
        <QuoteSection />
        <FinalCTA />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        <Route element={<ProtectedRoute />}>
          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;