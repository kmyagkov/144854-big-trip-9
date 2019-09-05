export const getTripInfoTemplate = ({dates, price, route}) => {
  return `<div class="trip-info__main">
            <h1 class="trip-info__title">${route}</h1>
            <p class="trip-info__dates">${dates}</p>
          </div>
          <p class="trip-info__cost">
            Total: &euro;&nbsp;<span class="trip-info__cost-value">${price}</span>
          </p>`;
};
