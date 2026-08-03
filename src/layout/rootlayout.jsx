import { Outlet } from "react-router";

import Container from "./container";
import NavBar from "./navbar";
import Footer from "./footer";

const RootLayout = () => {
  return (
    <main className="min-h-dvh flex flex-col bg-black text-white">
      <NavBar />

      <Container>
        <div className="flex-1">
          <Outlet />
        </div>
      </Container>

      <Footer />
    </main>
  );
};

export default RootLayout;