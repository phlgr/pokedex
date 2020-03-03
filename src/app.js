import './app.scss';
import { createElement } from './lib/dom';
import { createSearch } from './components/search';
import { createTitle } from './components/title';
import { pokemon } from './components/pokemon';

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const cardText = createElement('div', {
    className: 'main__text'
  });

  const title = createTitle('Pokedex');
  const search = createSearch();

  header.appendChild(title);
  header.appendChild(search);

  main.appendChild(cardText);

  search.addEventListener('input', searchField => {
    cardText.innerText = searchField.target.value;
  });

  return [header, main];
}
