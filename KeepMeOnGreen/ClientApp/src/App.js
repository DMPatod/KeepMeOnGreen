import React from "react";
import { Route } from "react-router";
import { ThemeProvider } from "@material-ui/core";
import globalTheme from "./global/globalTheme";
import Home from "./pages/Home";
import { BasicLayout } from "./components/Layout";

const App = () => {
  const displayNme = App.name;

  return (
    <ThemeProvider theme={globalTheme}>
      <BasicLayout>
        <Route exact path="/" component={Home} />
      </BasicLayout>
    </ThemeProvider>
  );
};

export default App;
