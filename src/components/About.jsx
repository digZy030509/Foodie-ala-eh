import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <div className="w-full " id="about">
      <div className="flex flex-col items-center mt-20 mb-20 w-[90%] mx-auto max-sm:mt-10 max-sm:mb-10">
        <h1 className="text-4xl text-red-600 font-bold mb-4">About Us</h1>
        <h3 className="text-2xl text-gray-700 font-bold mb-4">
          Learn More <span className="text-red-600">About Us</span>
        </h3>
      </div>
      <div className="w-[80%] md:w-full px-9 mx-auto flex items-start justify-center gap-4 max-sm:flex-col max-sm:gap-0 max-sm:w-[90%]">
        <div className="w-full max-sm:mt-10 max-sm:mb-10">
          <img
            src="/public/about.jpg"
            alt="About"
            className="rounded-lg w-full"
          />
          <div className="w-full border-4 border-gray-300 rounded-lg p-4 mt-4 text-center">
            <h2 className="text-2xl font-bold">Book a Table</h2>
            <p className="text-gray-700 text-lg mt-4 italic font-bold">
              +1 5589 55488 55
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col gap-4 mb-10 ">
          <h2 className="text-2xl font-bold ">All About Batangas</h2>
          <p className="text-gray-700 text-lg mt-4 italic w-[80%] max-sm:w-full md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className=" list-inside w-full ">
            <li className="text-gray-700 text-lg mt-4  w-[80%] sm:w-full">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-green-500 text-lg"
              />{" "}
              - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
            <li className="text-gray-700 text-lg mt-4 w-[80%] max-sm:w-full">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-green-500 text-lg"
              />{" "}
              - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
            <li className="text-gray-700 text-lg mt-4  w-[80%] max-sm:w-full">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-green-500 text-lg"
              />{" "}
              - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
            <li className="text-gray-700 text-lg mt-4  w-[80%]"></li>
          </ul>
          <img
            src="/public/about-2.jpg"
            alt="About2"
            className="w-[70%]  rounded-lg self-start max-sm:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
