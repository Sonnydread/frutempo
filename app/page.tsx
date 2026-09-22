
import HeroSection from "./propuesta/hero";
import Solution from "./propuesta/solution";
import Pricing from "./propuesta/pricing";
import LottieCardFlow from "./propuesta/lootie-grid";
import Carousel from "./propuesta/carousel-compo";
import Metrics from "./propuesta/metricas";
import MobileCarousel from "./propuesta/mobile-carru";
import Tester from "./propuesta/tester";
import HeroFrutempo from "./propuesta/hero-frutempo";
import Presentation from "./propuesta/presentation";
import Moments from "./propuesta/moments";
import FooterFrutempo from "./propuesta/footer";

export default function Page() {
  return(
    <>
    <HeroFrutempo />
    <Presentation />
    <Moments />
    <FooterFrutempo />
    {/* <HeroSection /> */}

    {/* <LottieCardFlow /> */}
    {/* <MobileCarousel /> */}
    {/* <Solution /> */}
    {/* <Carousel /> */}
    {/* <Metrics /> */}
    {/* <Pricing /> */}
    {/* <Tester /> */}
    </>
  )
}