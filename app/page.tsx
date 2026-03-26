
import HeroSection from "./propuesta/hero";
// import Problem from "./propuesta/problem";
import Solution from "./propuesta/solution";
import Services from "./propuesta/service";
import Pricing from "./propuesta/pricing";
import LottieCardFlow from "./propuesta/lootie-grid";
import Carousel from "./propuesta/carousel-compo";

export default function Page() {
  return(
    <>
    <HeroSection />
    <LottieCardFlow />
    {/* <Problem /> */}
    <Solution />
    <Carousel />
    <Services />
    <Pricing />
    </>
  )
}