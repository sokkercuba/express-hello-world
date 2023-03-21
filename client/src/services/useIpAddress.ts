import axios from "axios";
import { useEffect, useState } from "react";

const getIpData = async () => {
  const res = await axios.get("https://geolocation-db.com/json/");
  return res.data.IPv4;
};

function useIpAddress() {
  const [ip, setIp] = useState("");
  console.log("🚀 ~ ip:", ip);

  useEffect(() => {
    const getIp = async () => {
      const ip = await getIpData();
      setIp(ip);
    };

    getIp();
  }, [ip]);

  return ip;
}

export default useIpAddress;
