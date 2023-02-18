import FilmsModel from './model/films-model.js';
import FilmsPresenter from './presenter/films-presenter.js';
import { render } from './render.js';
import FooterStatView from './view/footer-stat-view.js';
import HeaderProfileView from './view/header-profile-view.js';

const header = document.querySelector('.header');
const siteMain = document.querySelector('.main');
const footerStat = document.querySelector('.footer__statistics');

const filmsModel = new FilmsModel();
const filmsPresenter = new FilmsPresenter();

render(new HeaderProfileView(), header);
render(new FooterStatView(), footerStat);


filmsPresenter.init(siteMain, filmsModel);
