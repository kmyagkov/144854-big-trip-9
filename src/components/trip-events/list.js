import {getEventEditTemplate} from './event/edit';
import {getCardTemplate} from './event/card';

export const getEventsListTemplate = () => {
  const cards = new Array(3).fill().map(getCardTemplate);
  return `<ul class="trip-events__list">
            ${getEventEditTemplate()}
            ${cards.join(``)}
          </ul>`;
};
