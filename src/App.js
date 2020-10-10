import React from 'react';
import './App.scss';
import Panel from './components/panel/panel.component';
import FormPage from './components/form-page/formpage.component';

import Roadmap from './pages/roadmap/roadmap.component' 
import Header from './components/header/header.component'
import FormularF8 from './formulare/f8-cerere-aut-constr/f8-cerere-autorizatie.formular'

const App = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <Panel side="left">
          
        </Panel>
        <FormPage formular={<FormularF8 />} />
        <Panel side="right" >
          <Roadmap/>
        </Panel>
      </div>
    </div>
  );
}

export default App;
