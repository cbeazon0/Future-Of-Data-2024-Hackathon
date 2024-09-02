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
        <div className="flex lg:flex-1 z-20">
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
        <div className="absolute inset-x-0 flex justify-center items-center">
          <h1 className="text-3xl font-bold text-color-8">Relaxed Finance</h1>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end z-20">
          <a
            href="/form"
            className="text-lg font-semibold leading-6 text-white hover:text-color-8 hover:underline"
          >
            Edit Form
          </a>
        </div>
      </nav>
    </header>
  );
};

export default FormHeader;
