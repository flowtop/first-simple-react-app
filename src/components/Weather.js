import React from "react";

const Weather = props => {

    return (
        <div className="weather">
            { props.city &&
                <div>
                    Weather: {props.weather} ({props.description}) <br/>
                    Place: {props.city}, {props.country} <br/>
                    Temperature: {props.temperature}°С <br/>
                    Wind: {props.wind} mph <br/>
                </div>

                { props.error &&
                    <p>{props.error}</p>
                }
            } 
                
        </div>
    );
}

export default Weather;
