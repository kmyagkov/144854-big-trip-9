import {getEventEditTemplate} from './event/edit';
import {getCardTemplate} from './event/card';
import {events} from '../data';

const eventsCount = 3;

export const getEventsListTemplate = () => {
  return `<ul class="trip-events__list">
            ${getEventEditTemplate(events[0])}
            ${events.slice(0, eventsCount).map((it) => getCardTemplate(it)).join(``)}
          </ul>`;
};
