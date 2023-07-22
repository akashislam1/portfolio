import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import { useEffect, useState } from "react";
import Aos from "aos";
import Footer from "../pages/Shared/Footer/Footer";
import Loader from "../components/Loader";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a delay to show the loader
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 overflow-x-hidden overflow-y-hidden">
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <NavBar></NavBar>
          <div className="min-h-screen w-full px-5 lg:px-0 lg:w-10/12 mx-auto">
            <Outlet />
          </div>
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default Main;
