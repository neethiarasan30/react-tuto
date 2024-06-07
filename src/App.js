import './App.css';
import { ClassComp } from './components/ClassComp';
import { FuncComp } from './components/FuncComp';
import React from 'react';
function App() {
  return (
    <React.Fragment>
   <FuncComp/>
   <ClassComp/>
    </React.Fragment>
  );
}

export default App;
