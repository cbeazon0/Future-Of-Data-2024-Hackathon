import { useState } from "react";
import logo from "../assets/logo.svg";
import logoHover from "../assets/logoHover.svg";

const FormHeader = () => {
  const [isHover, setIsHovered] = useState(false);

  return (
    <header className="top-0 left-0 right-0 border-b border-white/10 z-10 bg-n-15">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Relax Finance</span>
            <img
              width={50}
              height={40}
              src={isHover ? logoHover : logo}
              alt=""
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          {/* Home link for smaller screens */}
          <a
            href="/"
            className="text-lg font-semibold leading-6 text-white hover:text-color-8 hover:underline"
          >
            Home
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* Home link for larger screens */}
          <a
            href="/"
            className="text-lg font-semibold leading-6 text-white hover:text-color-8 hover:underline"
          >
            Home
          </a>
        </div>
      </nav>
    </header>
  );
};

export default FormHeader;