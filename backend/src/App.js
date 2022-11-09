import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import MainPage from './components/Dashboard/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MainPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
