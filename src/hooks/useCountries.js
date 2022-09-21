import { useEffect, useState } from 'react';
import { getCountries } from '../services/client';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');
  const [filterContinent, setFilterContinent] = useState('all');


  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (e) {
        setError(e.message);
      }  
    }
    fetchData();
  }, []);

  return { countries, error, filterContinent, setFilterContinent } ;
}