import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import ListaContactos from "./Components/ListaContactos"
import { Divider } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Iron contacts</h1>
        <Divider />
        <ListaContactos contactos={contacts}/>
      </div>
    );
  }
}

export default App;
