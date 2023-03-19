import { useContext } from "react";

import SignIn from "../SignIn";
import { AppContext } from "../../store/StoreProvider";
import { HomePage } from "../../pages";

const LoginRequired = () => {
  const { state } = useContext(AppContext);
  const { loggedIn } = state;

  return !loggedIn ? <SignIn /> : <HomePage />;
};

export default LoginRequired;
