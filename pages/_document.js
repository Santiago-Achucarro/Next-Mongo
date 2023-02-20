import { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          margin: 0,
          padding: 0,
        },
        body: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
          <Main />
          <NextScript />
      </body>
    </Html>
  );
}
