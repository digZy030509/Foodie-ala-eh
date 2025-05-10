import React from "react";
// only import what you want to use
import {
  Button,
  Label,
  TextInput,
  Textarea,
  ThemeProvider,
  createTheme,
} from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
const formTheme = createTheme({
  label: {
    root: {
      base: "text-sm font-medium",
      disabled: "opacity-50",
      colors: {
        default: "text-gray-900",
        error: "text-red-700",
      },
    },
  },
  textInput: {
    colors: {
      default:
        "bg-gray-50 border-gray-300 focus:ring-red-600 focus:border-red-600",
      error: "border-red-500 bg-red-50",
    },
  },

  Textarea: {
    colors: {
      default:
        "bg-gray-50 border-gray-300 focus:ring-red-600 focus:border-red-600",
      error: "border-red-500 bg-red-50",
    },
  },
});
const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center  py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p>We would love to hear from you!</p>
        <div className="container md:w-full px-9 mx-auto max-sm:px-2">
          <div className="w-full mt-10">
            <iframe
              className="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2139876.4897310887!2d120.44481377828271!3d13.682807761929439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d7a91b3cd695%3A0xedde6bfe84402615!2sAla%20Eh%20Pares*21!5e1!3m2!1sen!2sph!4v1746837527234!5m2!1sen!2sph"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-9 mx-auto mt-10 grid lg:grid-cols-2 gap-4 max-sm:grid-cols-1 max-sm:px-2">
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4">
            <FontAwesomeIcon
              icon={faLocation}
              className="text-red-600 lg:text-4xl max-sm:text-xl"
            />
            <div>
              <h2 className="lg:text-2xl font-bold max-sm:text-lg ">Address</h2>
              <p className="text-gray-600 max-sm:text-sm">
                123 Main Street, Batangas City, Philippines
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-red-600 lg:text-4xl max-sm:text-xl"
            />
            <div>
              <h2 className="lg:text-2xl font-bold max-sm:text-lg ">
                Email Us
              </h2>
              <p className="text-gray-600 max-sm:text-sm">info@example.com</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-red-600 lg:text-4xl max-sm:text-xl "
            />
            <div>
              <h2 className="lg:text-2xl font-bold max-sm:text-lg">Call Us</h2>
              <p className="text-gray-600 max-sm:text-sm">+1 5589 55488 55</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4">
            <FontAwesomeIcon
              icon={faClock}
              className="text-red-600 lg:text-4xl max-sm:text-xl"
            />
            <div>
              <h2 className="lg:text-2xl font-bold max-sm:text-lg ">
                Opening Hours
              </h2>
              <p className="text-gray-600 max-sm:text-sm">
                <b>Mon-Sat:</b> 11AM - 23PM; <b>Sunday:</b> Closed
              </p>
            </div>
          </div>
        </div>

        <div
          id="contact"
          className="w-full md:w-1/2 px-9 mx-auto mt-10 bg-white shadow-md rounded-lg p-6"
        >
          <form action="" className="flex flex-col gap-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="text1">Your Name</Label>
                </div>
                <ThemeProvider theme={formTheme}>
                  <TextInput
                    id="text1"
                    type="text"
                    placeholder="John Doe"
                    required
                    color="default"
                  />
                </ThemeProvider>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1">Your Email</Label>
                </div>
                <ThemeProvider theme={formTheme}>
                  <TextInput
                    id="email1"
                    type="email"
                    placeholder="name@example.com"
                    required
                    color="default"
                  />
                </ThemeProvider>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="subject">Subject</Label>
                </div>
                <ThemeProvider theme={formTheme.textInput}>
                  <TextInput
                    id="text1"
                    type="text"
                    placeholder="Subject"
                    required
                    color="default"
                  />
                </ThemeProvider>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="message">Message</Label>
                </div>
                <ThemeProvider theme={formTheme.Textarea}>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    required
                    rows={4}
                    color="default"
                  />
                </ThemeProvider>
              </div>
            </div>
            <div>
              <Button type="submit" color={"red"} className="hover:bg-red-700">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
