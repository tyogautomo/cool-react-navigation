import {
  REQUEST_CARDS,
  REQUEST_CARDS_SUCCESS,
  REQUEST_CARDS_FAILED
} from '../constant';

const initialState = {
  cards: [],
  isLoadingFetchingCards: false
}

const tcgCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CARDS:
      return {
        ...state,
        isLoadingFetchingCards: true
      }
    case REQUEST_CARDS_SUCCESS:
      return {
        ...state,
        isLoadingFetchingCards: false,
        cards: action.payload
      }
    case REQUEST_CARDS_FAILED:
      return {
        ...state,
        isLoadingFetchingCards: false
      }
    default:
      return { ...state };
  }
}

export { tcgCardReducer };
