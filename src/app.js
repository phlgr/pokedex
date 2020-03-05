import './app.scss';
import { createElement, appendContent } from './lib/dom';
import { createSearch } from './components/search';
import { createTitle } from './components/title';
import { createImg } from './components/img';
import pokedex_logo from './assets/pokedex_logo.svg';
import { pokemons, createCards } from './components/pokemon';

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const brand = createElement('div', {
    className: 'brand'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const footer = createElement('footer', {
    className: 'footer'
  });

  const title = createTitle('Pokedex');
  const logo = createImg(pokedex_logo, 'header__logo');
  const search = createSearch();

  appendContent(header, [brand, search]);
  appendContent(brand, [logo, title]);

  console.log(JSON.parse(sessionStorage.getItem(1)));
  let database = [];
  function setDatabase() {
    if ('1' in sessionStorage) {
      database = JSON.parse(sessionStorage.getItem(1));
    } else {
      database = pokemons;
    }
  }
  setDatabase();

  let searchResults = createCards(database, 'pokemons', 'pokemon');
  main.appendChild(searchResults);
  search.value = sessionStorage.getItem(0);

  let favorites = createCards(
    JSON.parse(localStorage.getItem('favorites')) || [],
    'favorites',
    'pokemon'
  );
  footer.appendChild(favorites);

  document.addEventListener('updateFavorites', () => {
    footer.removeChild(favorites);
    favorites = createCards(
      JSON.parse(localStorage.getItem('favorites')) || [],
      'favorites',
      'pokemon'
    );
    footer.appendChild(favorites);
  });

  search.addEventListener('input', searchField => {
    console.log(searchField);
    main.removeChild(searchResults);

    const searchValue = searchField.target.value.toLowerCase();
    sessionStorage.setItem(0, search.value);
    const filteredPokemons = pokemons.filter(pokemon => {
      return pokemon.toLowerCase().includes(searchValue);
    });
    sessionStorage.setItem(1, JSON.stringify(filteredPokemons));
    searchResults = createCards(filteredPokemons, 'pokemons', 'pokemon');
    main.appendChild(searchResults);
  });

  return [header, main, footer];
}
