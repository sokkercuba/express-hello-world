import axios from "axios";
import { useContext, useState } from "react";
import { Toolbar } from "@mui/material";
import { AppContext } from "../../store/StoreProvider";

export const HomePage = () => {
  const { state } = useContext(AppContext);
  const { username } = state;
  console.log("🚀 ~ username:", username);

  return <div>Hello HomePage</div>;
};
