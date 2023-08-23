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
    background-color: rgb(227, 226, 223);
    color: #fff;
  }
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

function Home() {
  return (
    <>
      <main>
        <div className="home-page">
          
            <div className="container">
            <img src="https://picsum.photos/200/300" alt="random" />
            <h1>Welcome to My Page!</h1>
              <Button>
                <Link to="/about">About</Link>
              </Button>
            </div>
          
        </div>
      </main>
    </>
  );
}

function About() {
  return (
    <>
      <main>
      <div className="about-page">
        <div className="container">
            <div className="background"></div>
            <div className="card">
                <div className="card-background"></div>
                <div className="profile-picture">
                    <img src="/1468464029362.jpg" style={{ width: '31%', borderRadius: '20px' }} alt="Profile Picture" />
                    <div className="flex-column">
                        <h2>Shiggy Diggy</h2>
                        <p>Web Developer</p>
                    </div>
                </div>
                <div className="contact-info">
                    <h2>Contacts</h2>
                    <ul>
                        <li>Phone: 123-456-7890</li>
                        <li>Email: abc@abc.xyz</li>
                        <li>
                            <img src="/X_logo_2023.svg" style={{ width: '15px' }} alt="X Logo"></img>
                                <a>: test123</a>
                        </li>
                        <li>
                            <img src="/iconmonstr-linkedin-3.svg" style={{ width: '15px' }} alt="LinkedIn Logo"></img>
                                <a>: test123</a>
                        </li>
                        <li>
                            <img src="/GitHub_Invertocat_Logo.svg" style={{ width: '15px' }} alt="GitHub Logo"></img>
                                <a>: test123</a>
                        </li>
                    </ul>
                </div>
                <div className="skills">
                    <h2>Skills</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>PHP</li>
                        <li>SQL</li>
                    </ul>
                    <h2>Links</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </main>
  </>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
