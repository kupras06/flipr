import React from 'react';
import './App.css';import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HelpLine from "./screen/HelpLine";
import Sidebar from './components/Sidebar';
import Notification from './screen/Notifications'
import Hospital from './screen/Hospitals';
import Colleges from './screen/Colleges';
import MyChart from './screen/Chart'
import Header from './components/Header'
function App() {
  return (
    <React.Fragment>
      <Router>
      <Header/>

        <Sidebar />

        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/help-line" component={HelpLine} />
          <Route path="/advises" component={Notification} />
          <Route path="/hospital-beds" component={Hospital} />
          <Route path="/charts" component={MyChart} />
          <Route path="/college-beds" component={Colleges} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
