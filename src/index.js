import { createSearch } from './components/search.js';
import { title } from './components/title';
import './index.scss';

document.body.appendChild(title());
document.body.appendChild(createSearch());
