import React from 'react';
// import logo from './assets/images/logo.svg';
// import './assets/css/App.css';
// import Home from './components/Home'
// import News from './components/News'
// import Column from './components/Column'
import Event from './components/Event'
import List from './components/List'
import ReactForm from './components/ReactForm'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <Event/>
      <br/>
      <br/>
      <br/>
      <List/>
      <br/>
      <br/>
      <hr/>
      <ReactForm/>
      <br/>
      <hr/>
      <TodoList/>
    </div>
  );
}

export default App;
