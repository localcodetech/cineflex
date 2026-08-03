import HeroNavbar from "@/section/landing/heronavbar";
import HeroContent from "@/section/landing/herocontent";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black">
      <HeroNavbar />

      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/70 to-background" />

      <div className="relative">
        <HeroContent />

      </div>
    </section>
  );
};

export default Hero;