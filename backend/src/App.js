import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Login from './components/Dashboard/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Login />
      </BrowserRouter>
    </div>
  );
}

export default App;
