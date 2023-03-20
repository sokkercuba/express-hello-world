import { lazy, ReactNode, Suspense, useEffect, useState } from "react";
import { Box } from "@mui/material/";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

import { Footer, NavBar } from "../components";
import AppFallback from "../components/AppFallback";
import LoginRequired from "../components/LoginRequired";

const AboutPage = lazy(() => import("../pages/about/AboutPage"));
const ContactPage = lazy(() => import("../pages/contact/ContactPage"));
const NotFoundPage = lazy(() => import("../pages/404/NotFoundPage"));

interface SuspenseProps {
  children: ReactNode;
}
const SuspenseWrapper = ({ children }: SuspenseProps) => (
  <Suspense fallback={<AppFallback />}>{children}</Suspense>
);

export const AppRouter = () => {
  const [scriptLoadingState, setScriptLoadingState] = useState("IDLE");
  console.log("🚀 ~ scriptLoadingState:", scriptLoadingState);

  useEffect(() => {
    var script = document.createElement("script");
    script.type = "module";
    script.src = "./webContainer/webContainer.js";

    script.onload = function () {
      setScriptLoadingState("LOADED");
    };
    script.onerror = function () {
      setScriptLoadingState("FAILED");
    };

    document.body.appendChild(script);
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Routes>
          <Route path="/" element={<LoginRequired />} />

          <Route
            path="/about"
            element={
              <SuspenseWrapper>
                <AboutPage />
              </SuspenseWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <SuspenseWrapper>
                <ContactPage />
              </SuspenseWrapper>
            }
          />
          <Route
            path="/404"
            element={
              <SuspenseWrapper>
                <NotFoundPage />
              </SuspenseWrapper>
            }
          />

          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Box>
      <Footer />
    </BrowserRouter>
  );
};
