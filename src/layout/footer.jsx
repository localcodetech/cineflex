import { NavLink } from "react-router";

import Container from "@/layout/container";

import AppNameBrand from "@/components/common/logobrand";
import Head from "@/components/common/head";
import Paragraph from "@/components/common/Paragraph";

import { navigationLinks } from "@/data/navigation";
import { socialLinks } from "@/constants/appContants";
import { currentYear, navLinkStyle } from "@/constants/appvalues";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-800 bg-background">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-3">
          {/* Company */}
          <div>
            <AppNameBrand />

            <Paragraph
              text="Browse movies, read the details, watch the trailers. Built with React and the TMDB API."
              className="mt-4 max-w-xs text-sm"
            />
          </div>

          {/* Navigation */}
          <div>
            <Head text="Browse" className="text-sm" />

            <ul className="mt-4 flex flex-col gap-2">
              {navigationLinks.map((nav) => (
                <li key={nav.link}>
                  <NavLink to={nav.link} className={navLinkStyle}>
                    {nav.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <Head text="Follow Us" />

            <div className="mt-4 flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="text-lg text-neutral-400 transition hover:text-primary"
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-2 border-t border-neutral-800 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center">
          <Paragraph>
            &copy; {currentYear} CineFlix. All rights reserved.
          </Paragraph>

          <Paragraph>
            This product uses the TMDB API but is not endorsed or certified by
            TMDB.
          </Paragraph>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;