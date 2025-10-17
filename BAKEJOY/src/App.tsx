import HeaderSection from "../src/components/HeaderSection";
import Carousel from "../src/components/Carousel";
import Section7 from "../src/components/Section7";
import FooterSection from "../src/components/FooterSection";
import SignatureProducts from "./components/SignatureProducts";






const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full z-30">
        <HeaderSection />
      </header>

      {/* Carousel */}
      <section className="w-full flex-grow">
        <Carousel/>
      </section>

      <section className="w-full">
        <SignatureProducts/>
      </section>

      {/* Section7 */}
      <section className="w-full">
        <Section7 />
      </section>

      {/* Footer */}
      <footer className="w-full">
        <FooterSection />
      </footer>
    </div>
  );
};

export default App;
