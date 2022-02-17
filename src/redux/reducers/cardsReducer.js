const initialState = {
  items: [],
  likes: [],
  isLoaded: false,
  isFiltered: false,
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CARDS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };
    case 'SET_CARD_LIKED':
      return {
        ...state,
        likes: [...state.likes, action.payload],
      };
    case 'SET_CARD_UNLIKED':
      return {
        ...state,
        likes: state.likes.filter((id) => id !== action.payload),
      };
    case 'SET_FILTERED':
      return {
        ...state,
        isFiltered: action.isFiltered,
      };
    default:
      return state;
  }
};

export default cardsReducer;
