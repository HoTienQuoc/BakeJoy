import HeroSection from "./components/HeroSection";
import SignatureSection from "./components/SignatureSection";
import OccasionSection from "./components/OccasionSection";
import OrderSection from "./components/OrderSection";
import JournalSection from "./components/JournalSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 md:px-20 flex justify-between items-center sticky top-0 z-20">
        <h1 className="font-serif text-2xl text-orange-600">BakeJoy</h1>
        <nav className="hidden md:flex gap-8 text-sm text-gray-600">
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>
        <button className="border border-orange-400 text-orange-500 px-4 py-1.5 rounded-full hover:bg-orange-50">
          Register
        </button>
      </header>

      <main className="flex-1">
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
