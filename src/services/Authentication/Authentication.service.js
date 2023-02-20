import { signInWithEmailAndPassword } from "firebase/auth";

const loginRequest = (auth, email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export default loginRequest;
