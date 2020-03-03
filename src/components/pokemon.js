import { createElement } from '../lib/dom';

export const pokemons = ['Bulbasaur', 'Glumanda', 'Schiggy'];

export function createCards(database) {
  const container = createElement('div', {});

  database.forEach(pokemon => {
    const element = createElement('div', {
      className: 'pokemon',
      innerText: pokemon
    });
    container.appendChild(element);
  });
  return container;
}
