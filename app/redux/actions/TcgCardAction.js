import axios from 'axios';

import {
  REQUEST_CARDS,
  REQUEST_CARDS_SUCCESS,
  REQUEST_CARDS_FAILED
} from '../constant';
import { baseUrl } from '../../utils/baseUrl';

const requestTcgCard = page => async dispatch => {
  try {
    dispatch({ type: REQUEST_CARDS });
    const { data } = await axios({
      url: baseUrl(page)
    })
    dispatch({ type: REQUEST_CARDS_SUCCESS, payload: data.cards });
  } catch (error) {
    dispatch({ type: REQUEST_CARDS_FAILED })
  }
};

export { requestTcgCard };
