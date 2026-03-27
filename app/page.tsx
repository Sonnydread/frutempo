
import HeroSection from "./propuesta/hero";
// import Problem from "./propuesta/problem";
import Solution from "./propuesta/solution";
import Services from "./propuesta/service";
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
    {/* <Problem /> */}
    <Solution />
    <Carousel />
    {/* <Services /> */}
    <Metrics />
    <Pricing />
    </>
  )
}