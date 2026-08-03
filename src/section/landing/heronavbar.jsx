
import Container from "@/layout/container";
import AppNameBrand from "@/components/common/logobrand";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const HeroNavbar = () => {
  return (
    <header className="relative z-20">
      <Container>
        <nav className="flex items-center justify-between py-6">
          <AppNameBrand />

          <Link to={"/movies"}>
          <Button className={"py-5 px-8 font-bold capitalize"}>
            Get Started
          </Button>
          </Link>
        </nav>
      </Container>
    </header>
  );
};

export default HeroNavbar;