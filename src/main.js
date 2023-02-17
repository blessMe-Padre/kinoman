import { render } from './render.js';
import ButtonShowMoreView from './view/show-more-button-view.js';
import SortView from './view/sort-view.js';

const siteMain = document.querySelector('.main');

render(new SortView(), siteMain);
render(new ButtonShowMoreView(), siteMain);
