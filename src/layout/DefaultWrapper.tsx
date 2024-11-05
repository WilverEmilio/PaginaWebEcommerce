//@refresh
"use client";
import React, { useEffect } from "react";
import { animationCreate } from "@/utils/utils";
import BacktoTop from "@/components/common/backToTop/BacktoTop";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { usePathname } from "next/navigation";
import HeaderOne from "./header/HeaderOne";
import Footer from "./footer/Footer";
import HeaderTwo from "./header/HeaderTwo";
import FooterTwo from "./footer/footerTwo";
import HeaderThere from "./header/HeaderThere";
import FooterThree from "./footer/FooterThree";


interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const pathName = usePathname();
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 200);
  }, []);

  return (
    <>
      <BacktoTop />
      {(() => {
        switch (pathName) {
          default:
            return <HeaderTwo />
          case "/":
            return <HeaderOne />
          case "/home-3":
            return <HeaderThere />
        }
      })()}
      {children}
      {(() => {
        switch (pathName) {
          default:
            return <Footer />
          case "/home-2":
          case "/blog":
            return <FooterTwo />
          case "/home-3":
            return <FooterThree />
        }
      })()}
    </>
  );
};

export default Wrapper;
