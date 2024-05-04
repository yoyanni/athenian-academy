import { LayoutType } from "./types";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: LayoutType) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
