import axios from "axios";
import { useContext, useState } from "react";
import { Toolbar } from "@mui/material";
import { AppContext } from "../../store/StoreProvider";

export const HomePage = () => {
  const { state } = useContext(AppContext);
  console.log("🚀 ~ state:", state);

  return <div>Hello HomePage</div>;
};
