import HeaderSection from "../src/components/HeaderSection";
import Carousel from "../src/components/Carousel";
import Section7 from "../src/components/Section7";
import FooterSection from "../src/components/FooterSection";
import image1 from "../src/images/deva-williamson-S2jw81lfrG0-unsplash.jpg"
import image2 from "../src/images/deva-williamson-ntfGWVbBiO0-unsplash.jpg"
import image3 from "../src/images/katie-rosario-QNyRp21hb5I-unsplash.jpg"



const images = [
  image1,image2,image3
];


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full z-30">
        <HeaderSection />
      </header>

      {/* Carousel */}
      <section className="w-full flex-grow">
        <Carousel images={images} />
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
