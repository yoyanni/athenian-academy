import { LayoutProps } from "./types";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
