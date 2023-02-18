import { generateFilm } from '../mock/films';

export default class FilmsModel {
  films = Array.from({ length: 5 }, generateFilm);

  getFilms = () => this.films;
}
