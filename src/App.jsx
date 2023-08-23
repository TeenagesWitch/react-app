import logo from './logo.svg';
import './App.css';

function MyProfile( {name, age, children} ) {
  return (
    <div>
      <h2>My name is {name}, and I'm {age} years old.</h2>
      <p>{children}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyProfile name="John" age="20">I'm a student.</MyProfile>
      </header>
    </div>
  );
}

export default App;
