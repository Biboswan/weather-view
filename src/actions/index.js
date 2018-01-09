import axios from 'axios';

const API_KEY ='94baa39c88fc9cb8e6caa6cade457798';
const BASE_URL=`http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchWeather(city){
	const url=`${BASE_URL}&q=${city},in`;
	const request=axios.get(url);// like ajas request

	return {
		type:FETCH_WEATHER,
		payload:request
	};
}