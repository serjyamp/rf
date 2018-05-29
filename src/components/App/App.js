import React, { Component } from 'react';
import './App.css';
import configureStore from "../../store";
import { Provider } from "react-redux";

import Routes from "../../routes";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Routes/>
      </Provider>
    );
  }
}

export default App;