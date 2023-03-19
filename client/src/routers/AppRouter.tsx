import { Box } from "@mui/material/";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

import { Footer, NavBar } from "../components";
import LoginRequired from "../components/LoginRequired";
import { AboutPage, ContactPage, NotFoundPage } from "../pages";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Routes>
          <Route path="/" element={<LoginRequired />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Box>
      <Footer />
    </BrowserRouter>
  );
};
