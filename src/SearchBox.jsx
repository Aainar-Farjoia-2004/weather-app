import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let [errorMsg, setErrorMsg] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


    // Function to fetch weather info
    let getWeatherInfo = async () => {
        
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        // Check if response is valid (API uses cod = 200 for success)
        if (jsonResponse.cod !== 200) {
            throw new Error(jsonResponse.message || "City not found");
        }

        // Construct weather data object
        let result = {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            temMin: jsonResponse.main.temp_min,
            temMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feels_like: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };

        return result;
    };

    // Handle input change
    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    // Handle form submit
    let handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            setError(false);
            setErrorMsg("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity(""); // clear input only if success
        } catch (err) {
            console.error("Error fetching weather:", err);
            setError(true);
            setErrorMsg(err.message || "No such place exists");
        }
    };

    return (
        <div className="searchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="City"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type="submit">
                    Search
                </Button>

                {error && (
                    <p style={{ color: "red", marginTop: "10px" }}>
                        {errorMsg}
                    </p>
                )}
            </form>
        </div>
    );
}


 