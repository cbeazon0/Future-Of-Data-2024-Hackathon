import { useState } from "react";
import Devpost from "../assets/devpost.svg";
import DevpostHover from "../assets/devpostHover.svg";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mt-auto w-full py-4 px-4 sm:px-6 lg:px-8 mx-auto bg-n-15 border-t border-n-4">
      <div className="flex flex-col items-center text-center">
        <div>
          <a
            className="flex-none text-2xl font-semibold text-color-8"
            href="#"
            aria-label="Relax Finance"
          >
            Relaxed Finance
          </a>
        </div>
        <div className="mt-2 flex">
          <p className="text-n-3 mr-2">
            Developed For The Future Of Data Hackathon
          </p>
          <a
            href="https://future-of-data.devpost.com/?ref_feature=challenge&ref_medium=your-open-hackathons&ref_content=Submissions+open"
            target="_blank"
            rel="noopener noreferrer"
            className="-m-1 p-1"
          >
            <span className="sr-only">Devpost</span>
            <img
              width={20}
              height={20}
              src={isHovered ? DevpostHover : Devpost}
              alt=""
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
