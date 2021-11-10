import GlobalStyle from "assets/styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
              <Route
                path="/"
                element={<Navigate to="mercury/overview" />}
              ></Route>
              <Route path=":planet/*" element={<PlanetsSection />}>
                <Route path=":id" element={<PlanetsSection />}></Route>
              </Route>
            </Routes>
          </MainTemplate>
        </PlanetsProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Root;
