import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";

const Navbar = ({
  isReadyToMount = true,
  children,
}: {
  isReadyToMount?: boolean;
  children: ReactNode;
}) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 flex w-full justify-center  text-sm transition-transform  duration-300 sm:text-base",
        visible && isReadyToMount ? "translate-y-0" : "-translate-y-full",
      )}
    >
      {children}
    </nav>
  );
};

export default Navbar;
