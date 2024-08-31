import { useState } from "react";
import logo from "../assets/logo.svg";
import logoHover from "../assets/logoHover.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHover, setIsHovered] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-lg border-b border-white/10 z-10">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Relax Finance</span>
            <img
              width={50}
              height={40}
              src={isHover ? logoHover : logo}
              alt=""
              href="#"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open Main Menu</span>
            <Bars3Icon
              aria-hidden="true"
              className="h-6 w-6"
              style={{ color: "white" }}
            />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a
            href="#demo"
            className="text-lg font-semibold leading-6 text-white hover:text-color-8 hover:underline"
          >
            Demo
          </a>
          <a
            href="#benefits"
            className="text-lg font-semibold leading-6 text-white hover:text-color-8 hover:underline"
          >
            Benefits
          </a>
          <a
            href="#who-we-are"
            className="text-lg font-semibold leading-6 text-white hover:text-color-8 hover:underline"
          >
            Who We Are
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-lg font-semibold leading-6 text-white hover:text-color-8 hover:underline"
          >
            Start Now
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10">
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-n-14 px-6 py-3 sm:max-w-sm border-l border-white/10">
            <div className="flex justify-between items-center">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Relax Finance</span>
                <img
                  width={50}
                  height={40}
                  src={isHover ? logoHover : logo}
                  alt=""
                  href="#"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close Menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root text-center">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#demo"
                    className="-mx-3 block rounded-lg px-3 py-4 text-3xl font-semibold leading-7 text-white hover:text-color-8 hover:underline"
                  >
                    Demo
                  </a>
                  <a
                    href="#benefits"
                    className="-mx-3 block rounded-lg px-3 py-4 text-3xl font-semibold leading-7 text-white hover:text-color-8 hover:underline"
                  >
                    Benefits
                  </a>
                  <a
                    href="#who-we-are"
                    className="-mx-3 block rounded-lg px-3 py-4 text-3xl font-semibold leading-7 text-white hover:text-color-8 hover:underline"
                  >
                    Who We Are
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-4 text-3xl font-semibold leading-7 text-white hover:text-color-8 hover:underline"
                  >
                    Start Now
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </header>
  );
};

export default Header;
