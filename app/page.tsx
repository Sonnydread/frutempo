
import HeroSection from "./propuesta/hero";
import Solution from "./propuesta/solution";
import Pricing from "./propuesta/pricing";
import LottieCardFlow from "./propuesta/lootie-grid";
import Carousel from "./propuesta/carousel-compo";
import Metrics from "./propuesta/metricas";
import MobileCarousel from "./propuesta/mobile-carru";

export default function Page() {
  return(
    <>
    <HeroSection />
    <LottieCardFlow />
    <MobileCarousel />
    <Solution />
    <Carousel />
    <Metrics />
    <Pricing />
    </>
  )
}