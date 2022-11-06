import { Outlet} from "react-router-dom";
import Navbr from "../components/navbr";
import Footer from "../components/footer";
import Header from "../components/header";

const Layout = () => {
  return (
    <>
        <Header />
        <Navbr />
        <Outlet />
        <Footer />
    </>

  )
};

export default Layout;