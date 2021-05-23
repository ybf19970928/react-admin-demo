import React, { FC } from 'react';
import LayoutComponent from './components/Layout'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import './App.css'
const App: FC = () => {
  return (
    <Router>
      <React.Fragment>
          <LayoutComponent />
      </React.Fragment>
    </Router>
  );
}

export default App;
