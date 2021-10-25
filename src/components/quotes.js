import './quotes.css';
import React from 'react';

function SimpsonsQ({quotes}) {
return (
    quotes && (
    <div>
    <h2 class="quota">{quotes.quote}</h2>
    <h3 class="quota1">{quotes.character}</h3>
    <img src={quotes.image} alt=""/>
    {/* <h5>{quotes.characterDirection}</h5> */}
    
    </div>
    )
)
};


export default SimpsonsQ;