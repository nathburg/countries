import { useEffect, useState } from 'react';
import { getCountries } from '../services/client';

export function useCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCountries();
      setCountries(data);
    }
    fetchData();
  }, []);

  return countries;
}