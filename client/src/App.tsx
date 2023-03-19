import { AppRouter } from "./routers";
import CssBaseline from "@mui/material/CssBaseline";
import { StoreProvider } from "./store/StoreProvider";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
