import FilmsPresenter from './presenter/films-presenter.js';
import { render } from './render.js';
import HeaderProfileView from './view/header-profile-view.js';
import SortView from './view/sort-view.js';

const header = document.querySelector('.header');
const siteMain = document.querySelector('.main');
const filmsPresenter = new FilmsPresenter();

render(new HeaderProfileView(), header);
render(new SortView(), siteMain);


filmsPresenter.init(siteMain);
