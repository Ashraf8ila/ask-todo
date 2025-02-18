import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import { GlobalStyle, AppContainer } from './style/styles';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';

function App() {
  const [activeView, setActiveView] = useState('home');

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return <Home />;
      case 'dashboard':
        return <Dashboard />;
      case 'login':
        return <Login />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <GlobalStyle />
      <NavBar setActiveView={setActiveView} />
      <AppContainer>
        {renderView()}
      </AppContainer>
    </>
  );
}

export default App;
