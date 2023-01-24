import React from "react";
import Service from './template/Service';
import { createTheme, ThemeProvider } from "@mui/material";


const theme = createTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 650,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Service/>
      </ThemeProvider>
    </>
  );
}

export default App;

