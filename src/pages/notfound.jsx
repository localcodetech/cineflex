import { Link } from "react-router";

import Container from "@/layout/container";

import Head from "@/components/common/head";
import Paragraph from "@/components/common/Paragraph";

import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <section className="flex min-h-[70vh] items-center justify-center">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-8xl font-bold text-primary">404</p>

          <Head
            text="Page Not Found"
            className="mt-6 text-4xl font-bold"
          />

          <Paragraph
            text="Sorry, the page you are looking for doesn't exist or may have been moved."
            className="mx-auto mt-4 max-w-lg text-neutral-400"
          />

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/">
              <Button>
                Go Home
              </Button>
            </Link>

            <Link to="/movies">
              <Button variant="outline">
                Browse Movies
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;