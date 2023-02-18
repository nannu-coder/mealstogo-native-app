import { useContext } from "react";
import { restuarantContext } from "../services/restuarants/restuarant.context";

const useRestuarant = () => {
  return useContext(restuarantContext);
};

export default useRestuarant;
