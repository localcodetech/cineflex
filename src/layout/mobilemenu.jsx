import { useState } from "react";
import { NavLink } from "react-router";

import { MenuIcon, XIcon } from "lucide-react";

import { navigationLinks } from "@/data/navigation";
import { Button } from "@/components/ui/button";

const MobileMenu = ({ query, setQuery, linkStyle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        className="text-xl md:hidden"
      >
        {menuOpen ? <XIcon /> : <MenuIcon />}
      </Button>

      {menuOpen && (
        <div className="border-t border-neutral-800 px-5 py-4 md:hidden">
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search..."
            className="mb-4 w-full rounded border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white placeholder:text-neutral-500 sm:hidden"
          />

          <ul className="flex flex-col gap-4">
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
        </div>
      )}
    </div>
  );
};

export default MobileMenu;