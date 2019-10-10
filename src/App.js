import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=VnVbCn9guQeJqctFRHNWzKeKMKktVPSfX8KVB8cu')
    .then(response => {
      console.log('Huzzah! card data returned', response.data);
      setCard(response.data);
    })
    .catch(error => {
      console.log('NASA data not returned', error)
    })
  },[]);

  return (
    <div className="App">
      <Page         
        title = {card.title}
        hdurl = {card.hdurl}
        date = {card.date}
        explanation = {card.explanation}
        copyright = {card.copyright}
        cardURL = {card.url}/>
    </div>
  )
}

export default App;
