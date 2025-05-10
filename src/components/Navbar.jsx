import navbars from "../pages/navbars";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(windowWidth < 768);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
      console.log(isMobile);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleHamburger = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav className="w-full shadow scroll-smooth">
      <header className="w-[80%] mr-auto ml-auto bg-white  flex justify-around items-center p-4 max-sm:w-full">
        <h2 className="text-3xl font-bold">
          Foodie Ala Eh <span className="text-yellow-500">!</span>
        </h2>

        {isMobile ? (
          <div>
            <button
              type="button"
              className="text-3xl text-gray-600"
              onClick={handleHamburger}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            </button>
          </div>
        ) : (
          <ul className="flex gap-4">
            {navbars.map((navbar) => (
              <li
                key={navbar.id}
                className="hover:text-yellow-500 ease-in-out duration-100"
              >
                <a href={navbar.path} className="text-lg font-bold ">
                  {navbar.name}
                </a>
              </li>
            ))}
          </ul>
        )}

        <button
          type="button"
          className="max-md:hidden text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Order Now
        </button>
      </header>
      {isOpen && (
        <div className="w-full p-4 absolute shadow  bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <ul className="flex flex-col gap-4">
            {navbars.map((navbar) => (
              <li
                key={navbar.id}
                className="text-lg font-bold hover:text-yellow-500 ease-in-out duration-100 focus:outline "
              >
                <a href={navbar.path}>{navbar.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
