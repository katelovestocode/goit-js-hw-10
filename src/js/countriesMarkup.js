// markup for one country, when countries.length === 1
export function countryMarkup(data) {
  return data.map(
    ({ name, capital, population, flags, languages }) =>
      `<div class="card-body">
      <div class="card-header">
      <h1><img src="${flags.svg}" alt="${
        name.official
      }" width="50" height="30" class="card-image">${name.official}</h1>  </div>
      <p>Capital: ${capital}</p>
      <p>Population: ${population}</p>
      <p>Languages: ${Object.values(languages)}</p> </div>`
  );
}

// markup for many countries, when countries.length > 1
export function countriesMarkup(countries) {
  const markup = countries
    .map(({ flags, name }) => {
      return `
      <li> <img src="${flags.svg}" alt="${name.official}" width="30" height="20" class="card-image"> ${name.official} </li>`;
    })
    .join('');

  return markup;
}

// OR

// export function countryMarkup([
//   {
//     name: { official },
//     capital,
//     population,
//     flags: { svg },
//     languages,
//   },
// ]) {
//   const languageItems = Object.values(languages);

//   return `<div class="card-body">
//    <div class="card-header">
//     <h1 class="card-title">  <img src="${svg}" alt="flag" width="30" height="20" class="card-image"> ${official}</h1>
//     </div>
//     <ul>
//     <li class="card-text"> Capital: ${capital} </li>
//     <li class="card-text"> Population: ${population}</li>
//     <li class="card-text"> Languages: ${languageItems}</li>
//     </ul>
//     </div>`
// }
