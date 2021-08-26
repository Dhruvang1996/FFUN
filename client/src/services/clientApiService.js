const BASE_URL = process.env.REACT_APP_BE_URL;

export const getCars = () => fetch(BASE_URL, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((res) => res.json())
  .catch((error) => console.log(error));

export const createCar = (data) => fetch(BASE_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .catch((error) => console.log(error));

export const updateCar = (data) => fetch(BASE_URL, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .catch((error) => console.log(error));
