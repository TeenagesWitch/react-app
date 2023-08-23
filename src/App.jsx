import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

// function MyProfile( {name, age, children} ) {
//   return (
//     <div>
//       <h2>My name is {name}, and I'm {age} years old.</h2>
//       <p>{children}</p>
//     </div>
//   );
// }

function Home() {
  return (
    <>
      <main>
        <h2>Home</h2>
        <p>Welcome to the homepage</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>About</h2>
        <p>Welcome to the about page</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
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
