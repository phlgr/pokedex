export function createTitle(title) {
  const element = document.createElement('h1');
  element.innerText = title;
  element.className = 'title';
  return element;
}
