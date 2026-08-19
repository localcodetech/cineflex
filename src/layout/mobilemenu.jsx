import { useState } from "react";
import { NavLink } from "react-router";

import { MenuIcon, XIcon } from "lucide-react";

import { navigationLinks } from "@/data/navigation";
import { Button } from "@/components/ui/button";

const MobileMenu = ({ query, setQuery, linkStyle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="md:hidden block  ">
      <Button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        className="relative rounded-md transition-all active:scale-100 z-50 text-xl p-2 right-0 px-4 leading-8 "
      >
        {menuOpen ? <XIcon /> : <MenuIcon />}
      </Button>

      {menuOpen && (
        <div className="fixed top-0 right-0 h-dvh bg-black max-w-xs w-4/5 p-6 flex flex-col gap-8">
          

          <ul className="mt-16 flex flex-col gap-8">
            {navigationLinks.map((item) => (
              <li key={item.link}>
                <NavLink
                  to={item.link}
                  onClick={() => setMenuOpen(false)}
                  className={linkStyle}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        
      <div className="mt-8 pt-6 border-t-2">
          
        <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search..."
            className="mb-4 max-w-xs w-4/5 rounded border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white placeholder:text-neutral-500 sm:hidden"
          />

      </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;