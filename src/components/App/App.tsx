import type { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AgentFormPage from "../../pages/AgentFormPage/AgentFormPage";
import AgentDetailsPage from "../../pages/DetailsPage/AgentDetailsPage";
import HomePage from "../../pages/HomePage/HomePage";
import ReviewFormPage from "../../pages/ReviewFormPage/ReviewFormPage";
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
          <Route
           exact
           path={'/agent-form'}
           component={AgentFormPage} 
          />
          <Route
           exact
           path={'/review-form'}
           component={ReviewFormPage} 
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
