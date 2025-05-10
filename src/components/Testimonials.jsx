import testimonial from "../pages/testimonial";
import "flowbite/dist/flowbite.min.css";
import { Carousel } from "flowbite-react";
import "../index.css";
const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
        <p>This is what our customers say</p>
      </div>
      <div className="w-full max-w-4xl mx-auto mt-10">
        <div className="h-[400px] sm:h-64  xl:h-80 2xl:h-96">
          <Carousel>
            {testimonial.map((img) => (
              <div
                key={img.id}
                className="flex flex-col items-center justify-center h-full bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8"
              >
                <img
                  src={img.path}
                  alt={img.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h2 className="text-xl font-semibold mt-4">{img.name}</h2>
                <p className="text-gray-600">{img.title}</p>
                <p className="text-white bg-gray-500 rounded-lg p-4 mt-2 text-center italic">
                  {img.review}
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
