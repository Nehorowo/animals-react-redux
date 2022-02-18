import axios from 'axios';

export const fetchCards = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `https://zoo-animal-api.herokuapp.com/animals/rand/10`,
      //https://axoltlapi.herokuapp.com/
      //https://jsonplaceholder.typicode.com/posts
    )
    .then(({ data }) => dispatch(setCards(data)));
};

export const setCards = (items) => ({
  type: 'SET_CARDS',
  payload: items,
});

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
});

export const setCardLiked = (id) => ({
  type: 'SET_CARD_LIKED',
  payload: id,
});

export const setCardUnliked = (id) => ({
  type: 'SET_CARD_UNLIKED',
  payload: id,
});

export const setFiltered = (isFiltered) => ({
  type: 'SET_FILTERED',
  isFiltered,
});

export const deleteCard = (id) => ({
  type: 'DELETE_CARD',
  payload: id,
});
