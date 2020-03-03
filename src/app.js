import './app.scss';
import { createElement } from './lib/dom';
import { createSearch } from './components/search';
import { createTitle } from './components/title';
import { createImg } from './components/img';
import pokedex_logo from './assets/pokedex_logo.svg';

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
  const title = createTitle('Pokedex');
  const logo = createImg(pokedex_logo, 'header__logo');
  const search = createSearch();

  header.appendChild(brand);
  brand.appendChild(logo);
  brand.appendChild(title);
  header.appendChild(search);

  search.addEventListener('input', searchField => {
    console.log(searchField.target.value);
  });

  return [header, main];
}
