import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import ToolBar from "./components/NavBar/ToolBar/ToolBar";
import Lists from './components/Lists/Lists'
import AddUser from "./components/AddUser/AddUser";
import Footer from './components/Footer/Footer';
import "./App.scss";

function App() {
  return (
    <div className="App">

      <ToolBar /> 
      <div style={{marginTop:200 , padding:25}}>
      <Switch>
        <Route path="/adduser" component={AddUser} />
        <Route path="/lists" component={Lists} />
        <Redirect to='/adduser' />
      </Switch>
      </div>
      <Footer />
   
    </div>
  );
}

export default App;
