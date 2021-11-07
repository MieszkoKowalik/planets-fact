import GlobalStyle from "assets/styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainTemplate from "components/templates/MainTemplate";
import PlanetsSection from "components/organisms/PlanetsSection/PlanetsSection";
import PlanetsProvider from "providers/PlanetsProviders";
function Root() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PlanetsProvider>
          <MainTemplate>
            <Routes>
              <Route path=":planet/*" element={<PlanetsSection />} />
            </Routes>
          </MainTemplate>
        </PlanetsProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Root;
