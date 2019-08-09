import render from './components/render';
import {getTripInfoTemplate} from './components/trip-info';
import {getMainMenuTemplate} from './components/trip-controls/main-menu';
import {getFiltersTemplate} from './components/trip-controls/filters';
import {getSortTemplate} from './components/trip-events/sort';
import {getTripDaysTemplate} from './components/trip-events/days';

const tripInfo = document.querySelector(`.trip-info`);
const tripControls = document.querySelector(`.trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);

render(tripInfo, getTripInfoTemplate());
render(tripControls, getMainMenuTemplate());
render(tripControls, getFiltersTemplate());
render(tripEvents, getSortTemplate());
render(tripEvents, getTripDaysTemplate());
