import axios from 'axios';

const api = 'http://localhost:3000/';

export const setRandomGreeting = (greeting) => ({
  type: 'GREETING',
  payload: greeting,
});

export const getRandomGreeting = () => (dispatch) => {
  axios.get(api)
    .then((response) => {
      dispatch(setRandomGreeting(response.data.greeting));
    })
    .catch((error) => error);
};
