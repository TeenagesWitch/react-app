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
    color: #000;
  }
`;

function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

function Counter() {
  const [counter, setCounter] = React.useState(0);
  const CountDisplay = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem 0;
  `;

  React.useEffect(() => {
    document.title = `You clicked ${counter} times`;
  }, [counter]);

    return (
    <div className="counter-page">
      <div className="container">
        <div className="flex-column">
          <div className="flex-row">
            <Button onClick={() => setCounter(counter + 1)}>+</Button>
            <CountDisplay>{counter}</CountDisplay>
            <Button onClick={() => setCounter(counter - 1)}>-</Button>
          </div>
          <Link to="/">Go back to home</Link>
        </div>
      </div>
    </div>

  );
}


function Home() {

  return (
    <>
      <main>
        <div className="home-page">
            <div className="container">
            <img src="https://picsum.photos/200/300" style={{borderRadius: '20px'}}alt="random" />
            <h1>Welcome to My Page!</h1>
            <div className="flex-row">
              <Button>
                <Link to="/about">About</Link>
              </Button>
              <Button>
                <Link to="/counter">Counter</Link>
              </Button>
              </div>
            </div>
          
        </div>
      </main>
    </>
  );
}

function About() {
  const [textLink, setTextLink] = React.useState('Home');
  const [dataProfile, setDataProfile] = React.useState({name: 'Shiggy Diggy', profession: 'Web Developer'});
  const [skills, setSkills] = React.useState(['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL']);

  function handleClickProf() {
    if (dataProfile.profession === 'Web Developer') {
        setDataProfile({name: 'Shiggy Diggy', profession: 'Data Scientist'});
    } else {
        setDataProfile({name: 'Shiggy Diggy', profession: 'Web Developer'});
    }
  }
  
  function handleClickSkills() {
    if (skills.length === 5) {
        setSkills(['Python', 'R', 'Scala', 'Java']);
    } // Swich back again to default
    else {
        setSkills(['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL']);
    }
  }

  return (
    <>
      <main>
      <div className="about-page">
        <div className="container">
            <div className="background"></div>
            <div className="card">
                <div className="card-background"></div>
                <div className="profile-picture">
                    <img src="/1468464029362.jpg" style={{ width: '31%', borderRadius: '20px' }} alt="Profile" />
                    <div className="flex-column">
                        <h2>
                          {dataProfile.name}
                        </h2>
                        <p>
                          {dataProfile.profession}
                        </p>
                    </div>
                </div>
                <div className="contact-info">
                    <h2>Contacts</h2>
                    <ul>
                        <li>Phone: 123-456-7890</li>
                        <li>Email: abc@abc.xyz</li>
                        <li>
                            <img src="/X_logo_2023.svg" style={{ width: '15px' }} alt="X Logo"></img>
                              : test123
                        </li>
                        <li>
                            <img src="/iconmonstr-linkedin-3.svg" style={{ width: '15px' }} alt="LinkedIn Logo"></img>
                              : test123
                        </li>
                        <li>
                            <img src="/GitHub_Invertocat_Logo.svg" style={{ width: '15px' }} alt="GitHub Logo"></img>
                              : test123
                        </li>
                    </ul>
                </div>
                <div className="skills">
                    <h2>Skills</h2>
                    <ul>
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                    <h2>Links</h2>
                    <ul>
                        <li>
                            <Link to="/"
                              onMouseEnter={() => {
                                setTextLink('>> Home');
                              }}
                              onMouseLeave={() => {
                                setTextLink('Home');
                              }}
                            >
                              {textLink}
                            </Link>
                        </li>
                        <li>
                          <Link to="#"
                           onClick={handleClickProf} 
                           style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}
                          >
                            Switch Profession
                          </Link>
                        </li>
                        <li>
                          <Link to="#"
                            onClick={handleClickSkills}
                            style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}
                          >
                            Switch Skills
                          </Link>
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
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
