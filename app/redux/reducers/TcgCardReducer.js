import {
  REQUEST_CARDS,
  REQUEST_CARDS_SUCCESS,
  REQUEST_CARDS_FAILED,
  REQUEST_PAGE_CARDS,
  REQUEST_PAGE_CARDS_SUCCESS,
  REQUEST_PAGE_CARDS_FAILED,
  REQUEST_CARD_DETAIL,
  REQUEST_CARD_DETAIL_SUCCESS,
  REQUEST_CARD_DETAIL_FAILED,
  REQUEST_CARD_TYPES,
  REQUEST_CARD_TYPES_SUCCESS,
  REQUEST_CARD_TYPES_FAILED,
  REQUEST_CARD_SUBTYPES,
  REQUEST_CARD_SUBTYPES_SUCCESS,
  REQUEST_CARD_SUBTYPES_FAILED
} from '../constant';

const initialState = {
  cards: [],
  card: {},
  types: [],
  subtypes: [],
  isLoadingFetchingCards: false,
  isLoadingPage: false,
  isLoadingDetailPage: false,
  isLoadingTypes: false,
  isLoadingSubtypes: false
}

const tcgCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CARDS:
      return {
        ...state,
        isLoadingFetchingCards: true,
        cards: []
      };
    case REQUEST_CARDS_SUCCESS:
      return {
        ...state,
        isLoadingFetchingCards: false,
        cards: action.payload
      };
    case REQUEST_CARDS_FAILED:
      return {
        ...state,
        isLoadingFetchingCards: false
      };
    case REQUEST_PAGE_CARDS:
      return {
        ...state,
        isLoadingPage: true
      };
    case REQUEST_PAGE_CARDS_SUCCESS:
      return {
        ...state,
        isLoadingPage: false,
        cards: [...state.cards, ...action.payload]
      }
    case REQUEST_PAGE_CARDS_FAILED:
      return {
        ...state,
        isLoadingPage: false
      }
    case REQUEST_CARD_DETAIL:
      return {
        ...state,
        isLoadingDetailPage: true,
        card: {}
      }
    case REQUEST_CARD_DETAIL_SUCCESS:
      return {
        ...state,
        isLoadingDetailPage: false,
        card: action.payload
      }
    case REQUEST_CARD_DETAIL_FAILED:
      return {
        ...state,
        isLoadingDetailPage: false
      }
    case REQUEST_CARD_TYPES:
      return {
        ...state,
        isLoadingTypes: true
      }
    case REQUEST_CARD_TYPES_SUCCESS:
      return {
        ...state,
        isLoadingTypes: false,
        types: action.payload
      }
    case REQUEST_CARD_TYPES_FAILED:
      return {
        ...state,
        isLoadingTypes: false
      }
    case REQUEST_CARD_SUBTYPES:
      return {
        ...state,
        isLoadingSubtypes: true
      }
    case REQUEST_CARD_SUBTYPES_SUCCESS:
      return {
        ...state,
        isLoadingSubtypes: false,
        subtypes: action.payload
      }
    case REQUEST_CARD_SUBTYPES_FAILED:
      return {
        ...state,
        isLoadingSubtypes: false
      }
    default:
      return { ...state };
  }
}

export { tcgCardReducer };
