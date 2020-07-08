import React from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './pages/login/login';

function App() {

  let username = "BaiLong";
  let password = 123;
  let style = { color: "#0011ff", backgroundColor: "#fff" };
  return (
    <div className="App">
      <header className="App-header">
        <Login username={username} style={style} />
      </header>
    </div>
  );
}

export default App;
