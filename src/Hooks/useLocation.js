import { useContext } from "react";
import { locationContext } from "../services/location/location.context";

const useLocation = () => {
  return useContext(locationContext);
};

export default useLocation;
