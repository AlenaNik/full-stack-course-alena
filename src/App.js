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
    countries.map(country =>
    <h1 key={country.id}>
      {country.name}
    </h1>
    )
  )
}

export default App;
