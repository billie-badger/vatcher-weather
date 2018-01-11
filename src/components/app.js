import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <h1 className="title">Vatcher Casts</h1>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
