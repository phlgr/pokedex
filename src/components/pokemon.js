import './pokemon.scss';
import { createElement } from '../lib/dom';

export function createCards(database, containerClassName, pokemonClassName) {
  console.log(database);
  const container = createElement('div', {
    className: containerClassName
  });

  database.forEach(pokemon => {
    const element = createElement('div', {
      className: pokemonClassName,
      innerText: pokemon
    });

    element.addEventListener('click', () => {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      if (!favorites.includes(pokemon)) {
        favorites.push(pokemon);
      } else {
        const itemIndex = favorites.indexOf(pokemon);
        favorites.splice(itemIndex, 1);
      }

      if (favorites.length > 6) {
        favorites.splice(0, 1);
      }
      const favoritesJSON = JSON.stringify(favorites);
      localStorage.setItem('favorites', favoritesJSON);
      var event = new Event('updateFavorites');
      document.dispatchEvent(event);
    });
    container.appendChild(element);
  });
  return container;
}
