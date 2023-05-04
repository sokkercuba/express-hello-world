import { useState } from 'react'
import { AppRouter } from './routers'
import { PaletteMode } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import CssBaseline from '@mui/material/CssBaseline'
import { StoreProvider } from './store/StoreProvider'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState<PaletteMode>('light')
  const theme = createTheme({ palette: { mode: selectedTheme } })

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <StoreProvider>
          <CssBaseline />
          <AppRouter setSelectedTheme={setSelectedTheme} />
        </StoreProvider>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default App
