import React, {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
        .then(res => {
          setCountries(res.data)
        })
  }, []);


  return (
    <div>
 {countries.length !== 0 ?
     countries.map(country =>
             <>
                 <h1 key={country.id}>{country.name}</h1>
                 <p key={country.id}>{country.capital}</p>
                 <p key={country.id}>{country.population}</p>
                 <h2>languages</h2>
               <ul>
                   {country.languages.map(language =>
                   <li>
                       {language.name}
                   </li>)}
               </ul>
                 <img src={country.flag} alt="country flag" style={{width: "30%", height: "auto"}}/>
             </>

    ) :
     <p>Wait for it</p>
 }
     </div>
  )
 }

export default App;
