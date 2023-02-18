import { createElement } from '../render.js';
import { createFilmsCardControlsTemplate } from '../view/film-card-control-template.js';

const createFilmCardTemplate = (film) => {
  const { filmInfo } = film;

  return (
    `<article class="film-card">
      <a class="film-card__link">
        <h3 class="film-card__title">${filmInfo.title}</h3>
        <p class="film-card__rating">${filmInfo.totalRating}</p>
        <p class="film-card__info">
          <span class="film-card__year">1929</span>
          <span class="film-card__duration">1h 55m</span>
          <span class="film-card__genre">${filmInfo.genre}</span>
        </p>
        <img src="./images/posters/${filmInfo.poster}" alt="" class="film-card__poster">
        <p class="film-card__description">${filmInfo.description}</p>
        <span class="film-card__comments">5 comments</span>
      </a>
      ${createFilmsCardControlsTemplate()}
  </article>`
  );
};

export default class FilmCardView {
  constructor(film) {
    this.film = film;
  }

  getTemplate() {
    return createFilmCardTemplate(this.film);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
