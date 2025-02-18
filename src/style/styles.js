import styled, { createGlobalStyle } from 'styled-components';

// Global styles
export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #333;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }

  body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 320px;
    min-height: 100vh;
    background-color: #333;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
    color: rgba(255, 255, 255, 0.87);
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    color: white;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
      color: #333;
    }
  }
`;

// NavBar styles
export const Navbar = styled.nav`
  background-color: #333;
  overflow: hidden;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;

export const NavOutline = styled.div`
  border: 2px solid #646cff;
  border-radius: 8px;
  padding: 4px;
  width: 100%;
  max-width: 1200px;
`;

export const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  transition: transform 0.3s ease-in-out;
`;

export const NavItem = styled.li`
  flex: 1;
  display: flex;
  justify-content: center;
  transition: transform 0.3s ease-in-out;

  &.active {
    transform: scale(1.1);
  }
`;

export const NavLink = styled.a`
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, color 0.3s;

  &.active {
    background-color: #646cff;
    color: white;
    border-radius: 8px;
  }

  &:hover {
    background-color: #535bf2;
    color: white;
  }
`;

// Login styles
export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #333;
`;

export const Form = styled.form`
  background: #444;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.87);
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #431e93;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #3a1a7a;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.87);
`;

// App styles
export const AppContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

export const Card = styled.div`
  padding: 2em;
  background-color: #444;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: rgba(255, 255, 255, 0.87);
`;

