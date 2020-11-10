import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.scss";
import Panel from "./components/panel/panel.component";
import FormPage from "./components/form-page/formpage.component";

import Roadmap from "./pages/roadmap/roadmap.component";
import Login from "./pages/login-out/login.page";
import Header from "./components/header/header.component";
import FormularF8 from "./formulare/f8-cerere-aut-constr/f8-cerere-autorizatie.formular";

const ComponentWithPanels = (props) => {
  return (
    <div className="main-container">
      <Panel side="left"></Panel>
      <FormPage formular={props.component} />
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
          <Link to="/" exact>Home</Link>
          <Link to="/formular-f8" exact>Formulare</Link>
          <Link to="/teste" exact>Teste</Link>
        </Header>

        <Switch>
          <Route path="/formular-f8" component={ComponentWithPanels} />
          <Route path="/" render={(props)=>(<ComponentWithPanels {...props} component={<FormularF8/>}/>)} />
          <Route path="/login" render={(props)=>(<ComponentWithPanels {...props} component={<Login/>}/>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
