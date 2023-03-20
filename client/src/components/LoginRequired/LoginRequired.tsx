import { useContext } from "react";

import SignIn from "../SignIn";
import { HomePage } from "../../pages";
import { AppContext } from "../../store/StoreProvider";

const LoginRequired = () => {
  const { state } = useContext(AppContext);
  const { loggedIn } = state;

  return !loggedIn ? <SignIn /> : <HomePage />;
};

export default LoginRequired;
