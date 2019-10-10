import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=r5sUbJ04T0QQB9ePgcmclsEuaScYcf7Ovny30X0n')
    .then(response => {
      console.log('Huzzah! card data returned', response.data);
      setCard(response.data);
    })
    .catch(error => {
      console.log('NASA data not returned', error)
    })
  },[]);

}

export default App;
