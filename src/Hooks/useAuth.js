import { useContext } from "react";
import { AuthenticationContext } from "../services/Authentication/AuthenticationContext";

const useAuth = () => {
  return useContext(AuthenticationContext);
};

export default useAuth;
