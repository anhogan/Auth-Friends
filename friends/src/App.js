import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/login" component={LoginPage} />
    </div>
  );
}

export default App;
