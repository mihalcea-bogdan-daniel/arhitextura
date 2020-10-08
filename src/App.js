import React from 'react';
import './App.scss';
import Panel from './components/panel/panel.component';
import FormPage from './components/form-page/formpage.component';
import {ReactComponent as ArhiLogo} from './icons/logo_arhitextura.svg'

import  Header from './components/header/header.component'
import FormularF8 from './formulare/f8-cerere-aut-constr/f8-cerere-autorizatie.formular'

const App = () => {
  return (
    <div className="main-container">
      <Header className="dani"/>
      <Panel side="left">
        <ArhiLogo className="logo"/>
      </Panel>

      <FormPage formular = {<FormularF8 />}/>
      <Panel side="right"/>
    </div>
  );
}

export default App;
