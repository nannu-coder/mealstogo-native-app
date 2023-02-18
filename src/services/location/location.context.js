import { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.services";

const locationContext = createContext();

const LocationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("san francisco");
  const [keyword, setKeyword] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword.toLowerCase());
    locationRequest(keyword)
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    onSearch(keyword);
    //eslint-disable-next-line
  }, []);

  return (
    <locationContext.Provider
      value={{
        isLoading,
        error,
        location,
        keyword,
        search: onSearch,
      }}
    >
      {children}
    </locationContext.Provider>
  );
};

export { locationContext, LocationContextProvider };
