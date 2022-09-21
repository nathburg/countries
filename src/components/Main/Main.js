import React from 'react';
import { useCountries } from '../../hooks/useCountries';
import Country from '../Country/Country';

export default function Main() {
  
  const { countries, error, filterContinent, setFilterContinent } = useCountries();
  
  const countryDisplay = countries.filter((country) => {
    if (filterContinent === 'all') {
      return true;
    } else if (filterContinent === 'none') {
      return !country.continent;
    } else {
      return country.continent === filterContinent;
    }
  });
  return (
    <div>
      <div>{error}</div>
      <select onChange={(e) => setFilterContinent(e.target.value)}>
        <option value='all'>All</option>
        <option value='none'>None</option>
        <option value='Africa'>Africa</option>
        <option value='Antarctica'>Antarctica</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='North America'>North America</option>
        <option value='Oceania'>Oceania</option>
        <option value='South America'>South America</option>

      </select>
      {countryDisplay.map((country) => (
        <Country key={country.id} {...country} />

      ))}  
    </div>
  );
}
