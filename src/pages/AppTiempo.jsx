import React from 'react'
import axios from 'axios'

import "../assets/scss/WeatherApp.scss";
import "../assets/scss/Variables.scss"
import { useState } from 'react';

export default function AppTiempo() {
  const [data, setData] = useState({})
  const [loc, setLoc] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&lang=es&units=metric&appid=886d159871493c98422ad7325eaafd0d`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLoc('')
    }
  }

  return (
    <div className="weather-app ">
      <div className="buscador">
        <input
          value={loc}
          onChange={event => setLoc(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='El tiempo en...'
          type="text" />
      </div>
      <div className="weather-app_container">
        <div className="top">
          <div className="loc">
            <p className='font_size_large'>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1 className='font_size_extra_large'>{data.main.temp.toFixed()} °C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p className='font_size_large'>{data.weather[0].description}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="sens_termica">
              {data.main ? <p className='font_size_large'>{data.main.feels_like.toFixed()} °C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humedad">
              {data.main ? <p className='font_size_large'>{data.main.humidity} %</p> : null}
              <p>Humidity</p>
            </div>
            <div className="viento">
              {data.wind ? <p className='font_size_large'>{data.wind.speed.toFixed()} km/h</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }



      </div>
    </div>
  );

      }
