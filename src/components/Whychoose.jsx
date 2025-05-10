import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBicycle,
  faCarrot,
  faSuitcaseMedical,
} from "@fortawesome/free-solid-svg-icons";

const Whychoose = () => {
  return (
    <div id="whychoose">
      <section className="bg-slate-100 ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Why Choose Us?
            </h2>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Fast Delivery
              </h5>
              <FontAwesomeIcon
                icon={faBicycle}
                className="text-red-600 text-4xl mb-2 bg-white rounded-full p-2 hover:bg-red-100 cursor-pointer"
              />
              <p className="font-normal text-gray-500 ">
                We ensure that your orders are delivered quickly and
                efficiently.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Quality Ingredients
              </h5>
              <FontAwesomeIcon
                icon={faCarrot}
                className="text-red-600 text-4xl mb-2 bg-white rounded-full p-2 hover:bg-red-100 cursor-pointer"
              />
              <p className="font-normal text-gray-500 ">
                We use only high-quality ingredients to ensure that our food is
                fresh and delicious.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow drk:bg-gray-800 ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Healthy Options
              </h5>
              <FontAwesomeIcon
                icon={faSuitcaseMedical}
                className="text-red-600 text-4xl mb-2 bg-white rounded-full p-2 hover:bg-red-100 cursor-pointer"
              />
              <p className="font-normal text-gray-500 ">
                We offer a variety of healthy options to cater to different
                dietary needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whychoose;
