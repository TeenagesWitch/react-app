import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 4px;
  color: #000;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

function MyProfile( {name, age, children} ) {
  return (
    <div>
      <h2>My name is {name}, and I'm {age} years old.</h2>
      <p>{children}</p>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Home</h2>
        <p>Welcome to the homepage</p>
      </main>
      <nav>
        <Button>
          <Link to="/about">About</Link>
        </Button>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>About</h2>
        <MyProfile name="John" age="30">
          I'm a software developer.
        </MyProfile>
      </main>
      <Button>
          <Link to="/">Home</Link>
        </Button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header>
      <h1>Welcome to React Router</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
