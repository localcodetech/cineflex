import { Link } from "react-router";

import Container from "@/layout/container";
import AppNameBrand from "@/components/common/logobrand";
import { Button } from "@/components/ui/button";

const HeroNavbar = () => {
  return (
    <header className="relative z-20">
      <Container>
        <nav className="flex items-center justify-between py-6">
          <AppNameBrand />

          <Link to={"/home"}>
            <Button className="px-8 py-5 font-bold capitalize transition duration-200 hover:-translate-y-0.5">
              Get Started
            </Button>
          </Link>
        </nav>
      </Container>
    </header>
  );
};

export default HeroNavbar;