import React, { Component } from 'react';
import './App.css';
import './Components/Business/business';
import './Components/BusinessList/BusinessList';
import './Components/SearchBar/SearchBar';
import SearchBar from './Components/SearchBar/SearchBar';
import BusinessList from './Components/BusinessList/BusinessList';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <h1>ravenous</h1>
          <SearchBar />
          <BusinessList />
      </div>
    );
  }
}

export default App;
