import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.scss";
import Panel from "./components/panel/panel.component";
import FormPage from "./components/form-page/formpage.component";

import Roadmap from "./pages/roadmap/roadmap.component";
import Login from "./pages/login-out/login.page";
import SignUp from "./pages/login-out/signup.page";
import Header from "./components/header/header.component";
import FormularF8 from "./formulare/f8-cerere-aut-constr/f8-cerere-autorizatie.formular";

const ComponentWithPanels = (props) => {
  return (
    <>
      <Panel side="left"></Panel>
      <FormPage formular={props.component} />
      <Panel side="right">
        <Roadmap />
      </Panel>
    </>
  );
};
const App = () => {
  return (
    <Router>
      <Header>
        <Link to="/" exact>
          Home
        </Link>
        <Link to="/formular-f8" exact>
          Formulare
        </Link>
        <Link to="/teste" exact>
          Teste
        </Link>
      </Header>
      <div className="main-container">
        <Switch>
          
          <Route exact
            path="/"
            render={(props) => (
              <ComponentWithPanels {...props} component={<FormularF8 />} />
            )}
          />
          <Route exact
            path="/formular-f8"
            render={(props) => (
              <ComponentWithPanels {...props} component={<FormularF8 />} />
            )}
          />
          <Route exact path="/login" render={(props)=>(<ComponentWithPanels {...props} component={<Login/>}/>)} />
          <Route exact path="/signup" render={(props)=>(<ComponentWithPanels {...props} component={<SignUp/>}/>)} />
          
        </Switch>
      </div>
    </Router>
  );
};

export default App;
