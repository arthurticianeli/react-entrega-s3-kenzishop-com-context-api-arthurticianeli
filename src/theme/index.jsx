import { createTheme } from "@mui/material";

const primaryColor = "#3A5F11";
const secondaryColor = "#5AC59D";
const grey = "#F3F3F3";

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    grey: {
      main: grey,
    },
  },

  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          color: "white",
          backgroundColor: primaryColor,
          borderRadius: "20px",
          width: "100px",

          fontWeight: 900,
          ":hover": {
            backgroundColor: secondaryColor,
          },
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          textTransform: "none",
          color: grey,
          backgroundColor: primaryColor,
          fontWeight: 900,
          ":hover": {
            backgroundColor: secondaryColor,
          },
        },
      },
    },
  },
});
