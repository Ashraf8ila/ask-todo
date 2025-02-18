import NavBar from './Components/NavBar';
import AppRoutes from './Routes';
import { GlobalStyle } from './style/styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <AppRoutes />
    </>
  );
}

export default App;
