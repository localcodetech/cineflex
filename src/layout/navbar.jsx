import { useNavigate, NavLink } from "react-router";

import Container from "@/layout/container";

import { navigationLinks } from "@/data/navigation";
import { navLinkStyle } from "@/constants/appvalues";

import useSearchQuery from "@/hooks/usesearchquery";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import AppNameBrand from "@/components/common/logobrand";
import MobileMenu from "./mobilemenu";

const NavBar = () => {
  const { query, setQuery } = useSearchQuery();

  const navigate = useNavigate()
  const navigationHandler = ()=>{
    return  (
        navigate("/")
    )
  }

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-background backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <AppNameBrand />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6">
              {navigationLinks.map((nav) => (
                <li key={nav.link}>
                  <NavLink to={nav.link} className={navLinkStyle}>
                    {nav.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Search & Button */}
          <div className="hidden items-center gap-3 md:flex">
            <Input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              placeholder="Search..."
              className="w-56"
            />

            <Button  className={"py-5 px-8 text-xm"} onClick={navigationHandler}>Log out</Button>
          </div>

          {/* Mobile Menu */}
          <MobileMenu
            query={query}
            setQuery={setQuery}
            linkStyle={navLinkStyle}
          />
        </div>
      </Container>
    </header>
  );
};

export default NavBar;