import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './js/fetchCountries';
import { countriesMarkup, countryMarkup } from './js/countriesMarkup.js';

const DEBOUNCE_DELAY = 300;

const refs = {
  searchInput: document.querySelector('#search-box'),
  listOfCountries: document.querySelector('.country-list'),
  oneCountry: document.querySelector('.country-info'),
};

refs.searchInput.addEventListener(
  'input',
  debounce(onCountrySearch, DEBOUNCE_DELAY)
);

function onCountrySearch(event) {
  let searchQuery = event.target.value.trim();

  // clearing markup first
  refs.listOfCountries.innerHTML = '';
  refs.oneCountry.innerHTML = '';

  console.log(searchQuery);

  if (searchQuery !== '') {
    fetchCountries(searchQuery).then(renderCountryCard).catch(onFetchError);
  }
}

// rendering a card
function renderCountryCard(countries) {
  if (countries.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  }
  if (countries.length === 1) {
    refs.oneCountry.innerHTML = countryMarkup(countries);
    return;
  }

  refs.listOfCountries.innerHTML = countriesMarkup(countries);
}

function onFetchError(error) {
  Notiflix.Notify.failure('Oops, there is no country with that name');
  console.log(error);
}
