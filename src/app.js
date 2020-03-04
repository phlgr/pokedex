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
  const cardText = createElement('div', {
    className: 'main__text'
  });

  const title = createTitle('Pokedex');
  const logo = createImg(pokedex_logo, 'header__logo');
  const search = createSearch();

  appendContent(header, [brand, search]);
  appendContent(brand, [logo, title]);

  main.appendChild(cardText);

  let searchResults = createCards(pokemons);
  main.appendChild(searchResults);

  search.addEventListener('input', searchField => {
    console.log(searchField);
    main.removeChild(searchResults);

    const searchValue = searchField.target.value;
    const filteredPokemons = pokemons.filter(pokemon => {
      return pokemon.startsWith(searchValue);
    });

    searchResults = createCards(filteredPokemons);
    main.appendChild(searchResults);
  });

  return [header, main];
}
