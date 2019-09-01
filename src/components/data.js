import {getRandomInt} from './utils';

const EVENT_DESCRIPTION_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;
const HOURS_RATE_MS = 1000 * 60;

const getEvent = () => {
  return {
    type: [
      `Bus`,
      `Check-in`,
      `Drive`,
      `Flight`,
      `Restaurant`,
      `Ship`,
      `Sightseeing`,
      `Taxi`,
      `Train`,
      `Transport`,
      `Trip`
    ][Math.floor(Math.random() * 11)],
    city: [
      `Brugge`,
      `Copenhagen`,
      `Los-Angeles`,
      `Madrid`,
      `Venezia`,
      `Turin`,
    ][Math.floor(Math.random() * 6)],
    photos: new Array(3).fill().map(() => `http://picsum.photos/300/150?r=${Math.random()}`),
    description: EVENT_DESCRIPTION_TEXT.split(`. `).sort(() => 0.5 - Math.random()).slice(0, 3).join(`. `),
    time: {
      start: Date.now(),
      end: Date.now() + getRandomInt(1, 24) * HOURS_RATE_MS,
      get duration() {
        return new Date(this.end - this.start).getTime();
      }
    },
    price: getRandomInt(5, 200),
    services: [
      {
        name: `Add luggage`,
        price: 10,
        isActive: Math.random() >= 0.5
      },
      {
        name: `Switch to comfort class`,
        price: 80,
        isActive: Math.random() >= 0.5
      },
      {
        name: `Add meal`,
        price: 2,
        isActive: Math.random() >= 0.5
      },
    ],
    getServicesPrice() {
      return this.services.reduce((acc, it) => acc + it.price);
    }
  };
};

const getEvents = () => {
  return new Array(Math.floor(Math.random() * 100)).fill(``).map(() => getEvent());
};

const events = getEvents();

const tripInfoData = {
  get route() {
    if (events.length > 3) {
      return `${events[0].city} ... ${events[events.length - 1].city}`;
    }
    return events.map((it) => it.city).join(` - `);
  },
  get dates() {
    return `${new Date(events[0].time.start).toLocaleDateString()} &mdash; ${new Date(events[events.length - 1].time.end).toLocaleDateString()}`;
  },
  get price() {
    return events.splice(0, 3).reduce((acc, it) => {
      return acc + it.price;
    }, 0);
  }
};

export {events, tripInfoData};
