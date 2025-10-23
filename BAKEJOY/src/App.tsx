import HeaderSection from "../src/components/HeaderSection";
import Carousel from "../src/components/Carousel";
import Section7 from "../src/components/Section7";
import FooterSection from "../src/components/FooterSection";
import SignatureProducts from "./components/SignatureProducts";
import ChatBubbles from "./components/ChatBubbles";
import BakeJoyComponent from "./components/BakeJoyComponent";
import HowToOrderComponent from "./components/HowToOrderComponent";
import CakeJournalComponent from "./components/CakeJournalComponent";
import WaveSeparator from './components/WaveSeparator';



const App = () => {
  return (
    <div className="flex flex-col min-h-screen box-content">
      {/* Header */}
      <header className="w-full z-30">
        <HeaderSection />
      </header>

      {/* Carousel */}
      <section className="w-full flex-grow bg-[#FFF8F3]">
        <Carousel/>
      </section>

      {/* Sóng chia cách */}
      <WaveSeparator topColor="#FFF8F3" bottomColor="#FBE4D9" />

      <section className="w-full">
        <SignatureProducts/>
      </section>

      <WaveSeparator topColor="#FBE4D9" bottomColor="#2D544F" />

      <section className="w-full">
        <ChatBubbles/>
      </section>

      <WaveSeparator topColor="#2D544F" bottomColor="#FFF8F3" />

      <section className="w-full">
        <BakeJoyComponent/>
      </section>

      <WaveSeparator topColor="#FFF8F3" bottomColor="#FBE4D9" />

      <section className="w-full">
        <HowToOrderComponent/>
      </section>

      <WaveSeparator topColor="#FBE4D9" bottomColor="#FFF8F3" />

      <section className="w-full">
        <CakeJournalComponent/>
      </section>

      <WaveSeparator topColor="#FFF8F3" bottomColor="#FBE4D9" />


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
