import type { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AgentDetailsPage from "../../pages/DetailsPage/AgentDetailsPage";
import HomePage from "../../pages/HomePage/HomePage";
import "./App.css";



const App: FC = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route
           exact
           path={'/'}
           component={HomePage} 
          />
          <Route
           exact
           path={'/agent/:id'}
           component={AgentDetailsPage} 
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
