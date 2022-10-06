import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'c12b10cf36b3194d025030fa7f754c4e'

const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q : query,
            units: 'metric',
            APPID: API_KEY,
        }
    });
    return data;
}
export default fetchWeather;