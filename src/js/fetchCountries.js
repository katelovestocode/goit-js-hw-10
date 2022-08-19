const BASE_URL = 'https://restcountries.com/v3.1/';

// filter that only takes name, capital population, flag, and languages from the object from API
const SEARCH_FILTER = '?fields=name,capital,population,flags,languages';

// go to the server, parse result and return Promise as the result method json
export function fetchCountries(name) {
  return fetch(`${BASE_URL}/name/${name}${SEARCH_FILTER}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
