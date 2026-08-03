
import { ArrowRight } from "lucide-react";

import Container from "@/layout/container";
import Head from "@/components/common/head";
import Paragraph from "@/components/common/Paragraph";

import { Button } from "@/components/ui/button";

import bg from "@/assets/landbg.jpg";
import { Link } from "react-router";

const HeroContent = () => {
  return (
    <Container>
      <div className="grid min-h-[85vh] items-center gap-12 py-16 lg:grid-cols-2">
        {/* Left */}
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm text-red-400 hover:translate-0.5 transition-all duration-600">
            🔥 Updated Daily
          </span>

          <div className="space-y-5">
            <Head
              text="Discover Your Next Favorite Movie."
              className="text-5xl font-bold leading-tight lg:text-7xl hover:-translate-y-0.5 duration-1000 transition"
            />

            <Paragraph
              text="Explore thousands of movies, watch official trailers and discover what's trending."
              className="max-w-xl text-lg text-neutral-300 hover:translate-y-0.5 duration-1000 transition"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to={"/home"}>
            <Button className="h-12 px-8 hover:-translate-y-0.5 duration-1000 transition">
              Browse Movies
            </Button>
            </Link>

           <Link to={"/tv"}>
            <Button
              variant="outline"
              className="h-12 px-8 text-accent-foreground hover:-translate-y-0.5 duration-1000 transition">
              Live TV
              <ArrowRight className="ml-2 h-4 w-4 hover:-translate-x-0.5 duration-1000 transition" />
            </Button>
           </Link>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-neutral-400 hover:translate-y-1 duration-1000 transition">
            <span>⭐ Updated Daily</span>
            <span>🎬 Official Trailers</span>
            <span>🔥 Trending Movies</span>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <img
            src={bg}
            alt="Featured Movie"
            className="h-165 w-full rounded-3xl object-cover shadow-2xl"
          />

          <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-black via-black/20 to-transparent" />
        </div>
      </div>
    </Container>
  );
};

export default HeroContent;