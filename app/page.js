import BentoSection from "./components/bentoSection";
import { DestacadosCarousel } from "./components/destacados";
import HeroSlider from "./components/heroSlide";

export default function Home() {
  return (
    <main >
      <HeroSlider/>
      <DestacadosCarousel/>
      <BentoSection/>
    </main>
  )
}
