import React from 'react';
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { theme } from "./theme/theme";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './pages/Home';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
