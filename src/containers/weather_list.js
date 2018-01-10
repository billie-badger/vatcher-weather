import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * 9/5 - 459.67);
    const pressures = _.map(cityData.list.map(weather => weather.main.pressure), (pressure) => pressure * 0.02952998751);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord; // ES6

    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart data={temps} color='magenta' units="F" />
        </td>
        <td>
          <Chart data={pressures} color='white' units="inHg" />
        </td>
        <td>
          <Chart data={humidities} color='cyan' units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (Fahrenheit)</th>
            <th>Pressure (Inches of Mercury)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

//function mapStateToProps(state){
//  return { weather: state.weather };
//}
function mapStateToProps({ weather }){    // ES6 Syntax
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
