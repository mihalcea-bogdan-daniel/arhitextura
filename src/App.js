import React from 'react';
import './App.scss';
import Panel from './components/panel/panel.component';
import FormPage from './components/form-page/formpage.component';
import {ReactComponent as ArhiLogo} from './icons/logo_arhitextura.svg'

import FormularF8 from './formulare/f8-cerere-aut-constr/f8-cerere-autorizatie.formular'

const App = () => {
  let F = <FormularF8 />;
  return (
    <div className="main-container">
      <Panel side="left">
        <ArhiLogo className="logo"/>
      </Panel>
      <FormPage formular = {F}/>
      <Panel side="right"/>
    </div>
  );
}

export default App;
