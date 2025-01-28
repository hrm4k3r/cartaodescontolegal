import Advantage from "../components/advantage";
import Companies from "../components/companies";
import Getyourcard from "../components/getyourcard";
import Services from "../components/services";
import Slider from "../components/slider";
import TestimonialSlider from "../components/testimonials";

export default function HomePage() {
  return (
    <>
      <Slider />
      <Advantage />
      <Companies />
      <Services />
      <Getyourcard />
      <TestimonialSlider />
    </>
  )
}