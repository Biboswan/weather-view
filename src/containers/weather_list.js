import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../components/map.js';
//import {bindActionCreators} from 'redux';
//import {fetchWeather} from '../actions/index.js';
import Chart from '../components/chart.js';

class WeatherList extends Component{

    renderWeather(cityData){
    	const name=cityData.city.name;
    	const temps=cityData.list.map(weather=>  weather.main.temp);
    	const pressures=cityData.list.map(weather=>  weather.main.pressure);
    	const humidities=cityData.list.map(weather=>  weather.main.humidity);
    	const {lon,lat}= cityData.city.coord;
    	return(
    		<tr key={name}>
    			<td><GoogleMap lon={lon} lat={lat}/></td>
    			<td><Chart data={temps} color="blue"/></td>
    			<td><Chart data={pressures} color="orange"/></td>
    			<td><Chart data={humidities} color="green"/></td>
    		</tr>
    	);

    }
	render(){
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature(K)</th>
						<th>Presure(hPa)</th>
						<th>Humidity(%)</th>
					</tr>
				</thead>
				<tbody>
				{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>

			);
	}
}

function mapStateToProps({weather})
{
	return {weather};//{weather}=={weather:weather}}
}

export default connect(mapStateToProps)(WeatherList);
