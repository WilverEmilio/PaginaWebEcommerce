import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";

const useScrollDirection = (element: HTMLElement | null) => {
  const {scrollDirection, setScrollDirection} =  useContext(AppContext) as AppContextType
  const pathName = usePathname();
  
  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > prevScrollY) {
        setScrollDirection?.("down");
      } else {
        setScrollDirection?.("up");
      }
      prevScrollY = scrollTop;
    };

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScroll);
    if (element) {
      element.addEventListener("click", handleClick);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [element,setScrollDirection]);
   // Use the pathName to trigger setScrollDirection("up") when the pathname changes.
   useEffect(() => {
    setScrollDirection?.("up");
  }, [pathName, setScrollDirection]);

  return scrollDirection;
};

export default useScrollDirection;
