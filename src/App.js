import './App.css';
import React from 'react';
import Intro from "./components/Intro";
import Weather from "./components/Weather";
import Form from "./components/Form";

const API_KEY = "081469d12d7f286e1ffbe66bbb381ce2";

class App extends React.Component {

    state = {
        weather: undefined,
        description: undefined,
        temperature: undefined,
        city: undefined,
        country: undefined,
        wind: undefined,
        error: false
    }

    getWeather = async () => {
        let city = document.querySelector(".form input").value;
        
        if (city.trim() != "") {
            let weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

            if (weatherData.ok == true) {
                weatherData = await weatherData.json();
                await console.log(weatherData);

                this.setState({
                    weather: weatherData.weather[0].main,
                    description: weatherData.weather[0].description,
                    temperature: Math.round(weatherData.main.temp - 273.15),
                    city: weatherData.name,
                    country: weatherData.sys.country,
                    wind: Math.round(weatherData.wind.speed),
                    error: false
                });
            }
            else {
                this.setState({
                    error: "Город не найден"
                })
            }
        }
        else {
            this.setState({
                error: "Введите город"
            });
        }
        
    }

    render () {
        return (
            <div className="wrapper">
                <Intro />
                <Form clickMethod={ this.getWeather } />
                <Weather 
                    weather={this.state.weather}
                    description={this.state.description}
                    city={this.state.city}
                    temperature={this.state.temperature}
                    country={this.state.country}
                    wind={this.state.wind}
                    error={this.state.error}
                />
            </div>
        );
    }
}

export default App;
