import React from 'react';
import { useCountries } from '../../hooks/useCountries';
import Country from '../Country/Country';

export default function Main() {
  const countries = useCountries();
  return (
    <div>
      {countries.map((country) => (
        <Country key={country.id} {...country} />

      ))}  
    </div>
  );
}
