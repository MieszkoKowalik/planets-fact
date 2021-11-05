import GlobalStyle from "assets/styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";

function Root() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <p></p>
      </ThemeProvider>
    </>
  );
}

export default Root;
