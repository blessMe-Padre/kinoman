import { render } from '../render';
import FilterView from '../view/filter-view';
import SortView from '../view/sort-view';
import FilmsView from '../view/films-view';
import FilmsListView from '../view/films-list-view';
import FilmsListContainerView from '../view/films-list-container-view';
import FilmCardView from '../view/film-card-view';
import ButtonShowMoreView from '../view/show-more-button-view';


export default class FilmsPresenter {
  filmsComponent = new FilmsView();
  filmList = new FilmsListView();
  filmsListContainerComponent = new FilmsListContainerView();

  init = (container) => {
    this.container = container;

    render(new FilterView(), this.container);
    render(new SortView(), this.container);
    render(this.filmsComponent, this.container);
    render(this.filmList, this.filmsComponent.getElement());
    render(this.filmsListContainerComponent, this.filmList.getElement());

    for (let i = 0; i < 5; i++) {
      render(new FilmCardView(), this.filmsListContainerComponent.getElement());
    }

    render(new ButtonShowMoreView(), this.container);
  };
}
