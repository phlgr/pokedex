import { createElement } from '../lib/dom';

export function createImg(path, imgClass) {
  return createElement('img', {
    src: path,
    className: imgClass
  });
}
