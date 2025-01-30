import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import {BrowserRouter} from "react-router"
import {createTheme, ThemeProvider} from "@mui/material/styles"

import App from "./App"

const theme = createTheme({
  palette: {
    mode: "light",
  },
})

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
