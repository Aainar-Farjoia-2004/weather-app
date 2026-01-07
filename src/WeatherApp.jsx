import { useState } from 'react'
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'

export default function WeatherApp() {
    const [weatherInfo , setWeatherInfo] = useState({
        city : "wanderland",
        feels_like: 27.25,
        temp: 28.85,
        temMin: 28.85,
        temMax: 28.85,
        humidity: 14,
        weather: "clear sky",
    });

    let updateInfo = ( newInfo) => {
        setWeatherInfo( newInfo);
    }

    return(
        <div style={{textAlign : "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo ={updateInfo} />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}