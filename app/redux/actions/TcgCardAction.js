import axios from 'axios';

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
  REQUEST_CARD_SUBTYPES_FAILED,
  REQUEST_CARD_SUBTYPES_SUCCESS,
  REQUEST_SEARCH_TYPES_CARDS_FAILED,
  REQUEST_SEARCH_TYPES_CARDS_SUCCESS,
  REQUEST_SEARCH_TYPES_CARDS,
  REQUEST_SEARCH_SUBTYPES_CARDS_FAILED,
  REQUEST_SEARCH_SUBTYPES_CARDS_SUCCESS,
  REQUEST_SEARCH_SUBTYPES_CARDS
} from '../constant';
import { baseUrl } from '../../utils/baseUrl';

const requestTcgCard = page => async dispatch => {
  try {
    dispatch({ type: REQUEST_CARDS });
    const { data } = await axios({
      url: `${baseUrl}/cards?page=${page}`
    })
    dispatch({ type: REQUEST_CARDS_SUCCESS, payload: data.cards.slice(0, 30) });
  } catch (error) {
    dispatch({ type: REQUEST_CARDS_FAILED })
  }
};

const requestPageTcgCard = page => async dispatch => {
  try {
    dispatch({ type: REQUEST_PAGE_CARDS });
    const { data } = await axios({
      url: `${baseUrl}/cards?page=${page}`
    })
    dispatch({ type: REQUEST_PAGE_CARDS_SUCCESS, payload: data.cards.slice(0, 30) })
  } catch (error) {
    dispatch({ type: REQUEST_PAGE_CARDS_FAILED })
  }
}

const requestDetailCard = cardId => async dispatch => {
  try {
    dispatch({ type: REQUEST_CARD_DETAIL })
    const { data } = await axios({
      url: `${baseUrl}/cards/${cardId}`
    })
    dispatch({ type: REQUEST_CARD_DETAIL_SUCCESS, payload: data.card })
  } catch (error) {
    dispatch({ type: REQUEST_CARD_DETAIL_FAILED })
  }
}

const requestCardTypes = () => async dispatch => {
  try {
    dispatch({ type: REQUEST_CARD_TYPES });
    const { data } = await axios({
      url: `${baseUrl}/types`
    });
    dispatch({ type: REQUEST_CARD_TYPES_SUCCESS, payload: data.types });
  } catch (error) {
    dispatch({ type: REQUEST_CARD_TYPES_FAILED });
  }
};

const requestCardSubtypes = () => async dispatch => {
  try {
    dispatch({ type: REQUEST_CARD_SUBTYPES });
    const { data } = await axios({
      url: `${baseUrl}/types`
    });
    dispatch({ type: REQUEST_CARD_SUBTYPES_SUCCESS, payload: data.subtypes });
  } catch (error) {
    dispatch({ type: REQUEST_CARD_SUBTYPES_FAILED });
  }
};

const requestSearchCards = (typing, type, name) => async dispatch => {
  try {
    dispatch({
      type: typing === 'types' ? REQUEST_SEARCH_TYPES_CARDS : REQUEST_SEARCH_SUBTYPES_CARDS
    })
    const { data } = await axios({
      url: `${baseUrl}/cards?${typing}=${type}&name=${name}`
    })
    dispatch({
      type: typing === 'types' ? REQUEST_SEARCH_TYPES_CARDS_SUCCESS : REQUEST_SEARCH_SUBTYPES_CARDS_SUCCESS,
      payload: data.cards.slice(0, 15)
    })
  } catch (error) {
    dispatch({
      type: typing === 'types' ? REQUEST_SEARCH_TYPES_CARDS_FAILED : REQUEST_SEARCH_SUBTYPES_CARDS_FAILED
    })
  }
}

export {
  requestTcgCard,
  requestPageTcgCard,
  requestDetailCard,
  requestCardTypes,
  requestCardSubtypes,
  requestSearchCards
};
