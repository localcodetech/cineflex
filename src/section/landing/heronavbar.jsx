
import Container from "@/layout/container";
import AppNameBrand from "@/components/common/logobrand";
import { Button } from "@/components/ui/button";

const HeroNavbar = () => {
  return (
    <header className="relative z-20">
      <Container>
        <nav className="flex items-center justify-between py-6">
          <AppNameBrand />

          <Button className={"py-5 px-8 font-bold capitalize"}>
            Sign In
          </Button>
        </nav>
      </Container>
    </header>
  );
};

export default HeroNavbar;