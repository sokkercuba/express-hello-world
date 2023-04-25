import { AppRouter } from './routers'
import { SnackbarProvider } from 'notistack'
import CssBaseline from '@mui/material/CssBaseline'
import { StoreProvider } from './store/StoreProvider'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <StoreProvider>
          <CssBaseline />
          <AppRouter />
        </StoreProvider>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default App
