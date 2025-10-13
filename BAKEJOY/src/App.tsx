import HeroSection from "./components/HeroSection";
import SignatureSection from "./components/SignatureSection";
import OccasionSection from "./components/OccasionSection";
import OrderSection from "./components/OrderSection";
import JournalSection from "./components/JournalSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="bg-[var(--bake-cream)] sticky top-0 z-30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="h-playful text-xl text-[var(--bake-deep)]">BAKEJÖY</div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a>Products</a>
            <a>Journal</a>
            <a>Contact</a>
          </nav>
          <button className="text-sm border border-[var(--bake-deep)] rounded-full px-3 py-1">Register</button>
        </div>
      </header>

      <main>
        <HeroSection />
        <SignatureSection />
        <OccasionSection />
        <OrderSection />
        <JournalSection />
      </main>

      <Footer />
    </div>
  );
}
