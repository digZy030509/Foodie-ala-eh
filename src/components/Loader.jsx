import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";

const Loader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen z-10 absolute inset-0 top-0 left-0 bg-white bg-opacity-50">
          <Spinner color="failure" aria-label="Info spinner example" />
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default Loader;
