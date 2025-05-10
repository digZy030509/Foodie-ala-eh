import navbars from "../pages/navbars";
import "../CSS/hero.css";

const Hero = () => {
  return (
    <section className="w-full mr-auto ml-auto bg-[#e5e5e5] p-4">
      <div className="w-[80%] mr-auto ml-auto flex justify-between items-center p-4 max-sm:w-full max-sm:flex-col max-sm:justify-start">
        <div className="w-1/2 max-sm:w-full max-sm:text-center mr-auto ml-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Foodie Ala Eh!</h1>
          <p className="mb-2 text-lg">
            Food is the essence of life, Connect with us
          </p>
          <div className="flex gap-2 items-center  justify-center max-sm:flex-col">
            <a
              href={navbars[4].path}
              className="p-2 bg-yellow-500 block w-24 rounded-md text-center text-white  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              Order Now
            </a>
            <a
              href="https://www.google.com"
              className="inline-flex items-center  text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300
            bg-gray-500 p-2 rounded-md
            "
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                  clip-rule="evenodd"
                />
              </svg>
              Watch video
            </a>
          </div>
        </div>
        <div className="w-1/2 max-sm:w-full max-sm:flex max-sm:justify-center">
          <img
            id="bounce"
            src="/public/hero-img.png"
            className="w-full md:animate-[loop_1s_ease-in-out_infinite] max-sm:animate-none max-sm:mt-4 max-sm:w-[200px]"
            alt="Hero Banner"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
