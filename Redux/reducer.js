import {
  CUST_DATA,
  LOGIN_DATA,
  LOG_OUT,
  PROFILE_DATA,
  REG_DATA,
  SUPP_DATA,
} from './actionType';

const initialState = {
  cdata: [],
  sdata: [],
  loginData: [],
  user_id: '',
  user_name: '',
};

const contactListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CUST_DATA: {
      return {...state, cdata: action.payload};
    }
    case SUPP_DATA: {
      return {...state, sdata: action.payload};
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
