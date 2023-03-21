import { useContext, useEffect } from "react";
import { getUserData } from "../../services";
import useIpAddress from "../../services/useIpAddress";
import { setError, setLoading, setUser } from "../../store/actions";
import { AppContext } from "../../store/StoreProvider";

export const HomePage = () => {
  const ip = useIpAddress();
  const { state, dispatch } = useContext(AppContext);
  console.log("🚀 ~ HomePage state:", state);

  useEffect(() => {
    const userData = async () => {
      setLoading(dispatch, true);
      const response = await getUserData(ip);
      console.log("🚀 ~ getUserData response:", response);
      setLoading(dispatch, false);

      const { status, statusText, data } = response;

      if (status === 200 && statusText === "OK") {
        setUser(dispatch, data);
      } else {
        setError(dispatch, data?.error || statusText);
      }
    };

    if (ip) userData();
  }, [ip]);

  return <div>Hello HomePage</div>;
};
