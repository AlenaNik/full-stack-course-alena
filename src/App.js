import React, {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([])
   const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
        .then(res => {
          setCountries(res.data)
        })
  }, []);

const handleFilterChange = e => {
    const inputfilter = e.target.value;
    setFilter(inputfilter);
}

const countriesFiltered = filter === ' '
    ? countries : countries.filter(country =>
    country.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
        <div>
            find countries <input
                            onChange={handleFilterChange}
                            />
        </div>
 {countries.length !== 0 ?
     countriesFiltered.map(country =>
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
