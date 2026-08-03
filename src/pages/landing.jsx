import { useState } from "react";

import bg from "@/assets/landbg.jpg";

import Container from "@/layout/container";

import AppNameBrand from "@/components/common/logobrand";
import Head from "@/components/common/head";
import Paragraph from "@/components/common/Paragraph";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Landing = () => {
  const [search, setSearch] = useState("");



  
  return (
    <section className="relative min-h-dvh overflow-hidden">
      {/* Background Image */}
      <img
        src={bg}
        alt="Movie background"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Page Content */}
      <div className="relative z-10 flex min-h-dvh flex-col">



        {/* Top Banner */}
        <div className="bg-linear-to-r from-violet-500 via-blue-500 to-blue-900 py-3">
          <Head
            text="New to CineFlix? Try 7 days for free."
            style="text-center text-sm font-semibold text-white md:text-base"
          />
        </div>

        {/* Navbar */}
        <header>
          <Container>
            <nav className="flex items-center justify-between py-6">
              <AppNameBrand />

              <Button>
                Sign In
              </Button>
            </nav>
          </Container>
        </header>

        {/* Hero Section */}
        <main className="flex flex-1 items-center justify-center">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <Head
                text="Unlimited Movies, TV Shows and More."
                style="text-4xl font-bold text-white md:text-6xl"
              />

              <Paragraph
                text="Plans start at GHC 5.00. Cancel anytime."
                style="mt-6 text-lg text-white md:text-2xl"
              />

              <Paragraph
                text="Ready to watch? Enter your email to create or restart your membership."
                style="mt-4 text-base text-white md:text-lg"
              />

              <form className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
                <Input
                  type="email"
                  value={search}
                  placeholder="Enter your email"
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-12 w-full max-w-md"
                />

                <Button className="h-12 w-full md:w-auto">
                  Try for 7 Days
                </Button>
              </form>
            </div>
          </Container>
        </main>
      </div>
    </section>
  );
};

export default Landing;