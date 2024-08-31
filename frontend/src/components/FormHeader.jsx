import { useState } from "react";
import logo from "../assets/logo.svg";
import logoHover from "../assets/logoHover.svg";

const FormHeader = () => {
  const [isHover, setIsHovered] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent z-10">
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
              href="/"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default FormHeader;