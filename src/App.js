import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.scss";
import Panel from "./components/panel/panel.component";
import FormPage from "./components/form-page/formpage.component";

import Roadmap from "./pages/roadmap/roadmap.component";
import Header from "./components/header/header.component";
import FormularF8 from "./formulare/f8-cerere-aut-constr/f8-cerere-autorizatie.formular";

const ComponentWithPanels = (props) => {
  return (
    <div className="main-container">
      <Panel side="left"></Panel>
      <FormPage formular={<FormularF8 />} />
      <Panel side="right">
        <Roadmap />
      </Panel>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Header>
          <Link to="/" exact>
            Home
          </Link>
          <Link to="/formular-f8">Formulare</Link>
          <Link to="/teste">Teste</Link>
        </Header>
        
        <Switch>
          <Route path="/formular-f8" component={ComponentWithPanels} />
          <Route path="/" component={ComponentWithPanels} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
