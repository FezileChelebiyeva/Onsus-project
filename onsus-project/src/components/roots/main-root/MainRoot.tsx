import { Outlet } from "react-router-dom";
import { ReactNode } from "react";
import Footer from "../../../layouts/footer/Footer";

const MainRoot = (): ReactNode => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainRoot;
