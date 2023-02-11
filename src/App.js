import logo from './logo.svg';
import './App.css';
import React from 'react';

function formatName(user) {
  return user.firstName;
}

const user = {
  firstName: 'John',
  lastName: 'Wick'
};

function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

class Goodbye extends React.Component{
  render(){
    return <h2>Goodbye, {this.props.name}</h2>;
  }
}

function App(props) {
  
  const element = (
    <h1>
      Welcome {formatName(user)}
    </h1>);
   const element1 = (
    <div>
      <h1>Hello, world! </h1>
      <h2>It is {props.date.toLocaleTimeString()} in cameroun</h2>
    </div>
  );
  return (
    <div className='App'>
      <div>
        {element1}

      </div>
      <div>
        <Welcome name="Blake"/>
      </div>
      <div>
        <Goodbye name="Blake"/>
      </div>
    </div>

  );
}

export default App;
