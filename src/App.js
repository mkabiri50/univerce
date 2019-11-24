import React,{Component} from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import ToolBar from "./components/NavBar/ToolBar/ToolBar";
import SideDrawer from './components/NavBar/SideDrawer/SideDrawer';
import Lists from './components/Lists/Lists'
import AddUser from "./components/AddUser/AddUser";
import Footer from './components/Footer/Footer';
import EdirUser from './components/EditUser/EditUser'
import "./App.scss";

class App extends Component {
  state = {
    showSD: false
  }
  sdCloseHandler = () => {
    this.setState({ showSD: false });
  }
  sdToggleHandler = () => {
    this.setState((prevState) => {
      return { showSD: !prevState.showSD };
    }
    );
  }
  render() {
  return (
    <div className="App">

      <ToolBar drawerToggleclicked={this.sdToggleHandler}/> 
      <SideDrawer
          open={this.state.showSD}
          closed={this.sdCloseHandler} />
      <div style={{marginTop:150 , padding:25}}>
      <Switch>
        <Route path="/adduser" component={AddUser} />
        <Route path="/user/:id" exact component={EdirUser} />
        <Route path="/lists" component={Lists} />
        <Redirect to='/adduser' />
      </Switch>
      </div>
      <Footer />
   
    </div>
  );
}
}

export default App;
