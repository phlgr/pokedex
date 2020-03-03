import './app.scss';
import { createElement } from './lib/dom';
import { createSearch } from './components/search';
import { createTitle } from './components/title';

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const title = createTitle('Pokedex');
  const search = createSearch();

  header.appendChild(title);
  header.appendChild(search);

  search.addEventListener('input', searchField => {
    console.log(searchField.target.value);
  });

  return [header, main];
}
