import Header from "./components/ui/Header";
import HeroSection from "./components/blocks/HeroSection";
import SecondSection from "./components/blocks/SecondSection";
import ThirdSection from "./components/blocks/ThirdSection";
import CardSection from "./components/blocks/CardSection";
export default function App() {

  return (
    <main className="bg-[#F4F9E2] mx-auto">
      <Header />
      <section>
        <HeroSection />
      </section>
      <section>
        <SecondSection />
      </section>
      <section>
        <ThirdSection />
      </section>
        <CardSection />
    </main>
  )

}