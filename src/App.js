
import './App.css';
import React, { useState } from 'react';
import SimpsonsQ from './components/quotes';
import axios from 'axios';


const sampleQuotes = {
  quote: "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
  character: 'Lisa Simpson',
  image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
};

function App() {
  const [quota, setQuota] = useState(sampleQuotes)
  const getSimpson = () => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((response) => response.data)
    .then((data) => {
      setQuota(data[0]);
    });
};
  return (
    <div className="App">
      <header className="App-header">
     
        <p className="App-link">
          Hello there!
        </p>

<SimpsonsQ quotes={quota} />

<button class="boton" type="button" onClick={getSimpson}>Get A Quote</button>

        <p className="App-link">
         Thank you for visiting!
         Á la prochaine!
        </p>
   
      </header>
    </div>
  );
}

export default App;
