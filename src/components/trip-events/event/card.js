export const getCardTemplate = ({type, city, time, price, services}) => {
  return `<li class="trip-events__item">
            <div class="event">
              <div class="event__type">
                <img class="event__type-icon" width="42" height="42" src="img/icons/flight.png" alt="Event type icon">
              </div>
              <h3 class="event__title">${type} to ${city}</h3>

              <div class="event__schedule">
                <p class="event__time">
                  <time class="event__start-time" datetime="2019-03-18T12:25">${new Date(time.start).toLocaleTimeString([], {hour: `2-digit`, minute: `2-digit`})}</time>
                  &mdash;
                  <time class="event__end-time" datetime="2019-03-18T13:35">${new Date(time.end).toLocaleTimeString([], {hour: `2-digit`, minute: `2-digit`})}</time>
                </p>
                <p class="event__duration">${new Date(time.duration).toLocaleTimeString([], {hour: `2-digit`, minute: `2-digit`})}</p>
              </div>

              <p class="event__price">
                &euro;&nbsp;<span class="event__price-value">${price}</span>
              </p>

              <h4 class="visually-hidden">Offers:</h4>
              <ul class="event__selected-offers">
                ${services.filter((service) => service.isActive).map((service) => `<li class="event__offer">
                                                                                      <span class="event__offer-title">${service.name}</span>
                                                                                      &plus;
                                                                                      &euro;&nbsp;
                                                                                      <span class="event__offer-price">${service.price}</span>
                                                                                   </li>`).join(``)}
              </ul>

              <button class="event__rollup-btn" type="button">
                <span class="visually-hidden">Open event</span>
              </button>
            </div>
          </li>`;
};
