import {
  CUST_DATA,
  LOGIN_DATA,
  LOG_OUT,
  PROFILE_DATA,
  REG_DATA,
  SUPP_DATA,
  PAY_HISTORY,
  REC_HISTORY,
} from './actionType';

const initialState = {
  cdata: [],
  sdata: [],
  loginData: [],
  user_id: '',
  user_name: '',
  payHistory: [],
  recHistory: [],
};

const contactListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CUST_DATA: {
      return {...state, cdata: action.payload};
    }
    case SUPP_DATA: {
      return {...state, sdata: action.payload};
    }
    case PAY_HISTORY: {
      return {...state, payHistory: action.payload};
    }
    case REC_HISTORY: {
      return {...state, recHistory: action.payload};
    }
    case LOGIN_DATA: {
      return {
        ...state,
        //loginData: action.payload,
        user_id: action.payload,
        //user_name: action.payload,
      };
    }
    case PROFILE_DATA: {
      return {
        ...state,
        user_name: action.payload,
      };
    }
    case REG_DATA: {
      return {...state, user_name: action.payload};
    }
    case LOG_OUT: {
      return initialState;
    }
  }
  return state;
};

export default contactListReducer;
