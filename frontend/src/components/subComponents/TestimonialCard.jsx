import { useState } from "react";
import linkedIn from "../../assets/linkedIn.svg";
import linkedInHover from "../../assets/linkedInHover.svg";

const TestimonialCard = ({ imageSrc, name, title, testimonial, linkedInUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex h-auto">
      <div className="flex flex-col bg-n-4 rounded-xl">
        <div className="flex-auto p-4 md:p-6">
          <p className="text-base italic md:text-lg text-n-1">{testimonial}</p>
        </div>
        <div className="p-4 bg-n-5 rounded-b-xl md:px-7">
          <div className="flex items-center gap-x-3">
            <div className="shrink-0">
              <img
                className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                src={imageSrc}
                alt="Avatar"
              />
            </div>
            <div className="grow">
              <p className="text-sm sm:text-base font-semibold text-white">
                {name}
              </p>
              <p className="text-xs text-n-2">{title}</p>
            </div>
            <div className="flex lg:flex-2">
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="-m-1 p-1"
              >
                <span className="sr-only">{`${name} LinkedIn`}</span>
                <img
                  width={40}
                  height={40}
                  src={isHovered ? linkedInHover : linkedIn}
                  alt=""
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
