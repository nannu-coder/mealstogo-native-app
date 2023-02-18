import { createContext, useEffect, useState } from "react";
import { restuarantRequest, resturantTramsform } from "./restuarant.services";

const restuarantContext = createContext();

const RestuarantProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [restuarants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  const retriveRestuarant = () => {
    setIsLoading(true);

    setTimeout(() => {
      restuarantRequest()
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

  console.log(restuarants);

  useEffect(() => {
    retriveRestuarant();
  }, []);

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
