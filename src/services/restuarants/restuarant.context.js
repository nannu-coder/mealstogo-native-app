import { createContext, useEffect, useState } from "react";
// import useLocation from "../../Hooks/useLocation";
import { restuarantRequest, resturantTramsform } from "./restuarant.services";

const restuarantContext = createContext();

const RestuarantProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [restuarants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);
  // const { location } = useLocation();

  const retriveRestuarant = (location) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restuarantRequest(location)
        .then(resturantTramsform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    // const locationString = `${location.lat}, ${location.lbg}`
    // retriveRestuarant(locationString);
    retriveRestuarant();
  }, []); // should usedepency location later on

  return (
    <restuarantContext.Provider
      value={{
        restuarants,
        isLoading,
        error,
      }}
    >
      {children}
    </restuarantContext.Provider>
  );
};

export { restuarantContext, RestuarantProvider };
