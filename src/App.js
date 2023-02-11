import logo from './logo.svg';
import './App.css';

function formatName(user) {
  return user.firstName;
}

const user = {
  firstName: 'John',
  lastName: 'Wick'
};

function App() {
  
  const element = (
    <h1>
      Welcome {formatName(user)}
    </h1>);
   const element1 = (
    <div>
      <h1>Hello, world! </h1>
      <h2>It is {new Date().toLocaleTimeString()} in cameroun</h2>
    </div>
  );
  return (
    <div className='App'>
        {element1}
    </div>
  );
}

export default App;
