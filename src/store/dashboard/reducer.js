import * as types from './actionTypes';

const initialState = {
  data: [],
  detailData: {}
};

const allData = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_DATA:
      return { ...state, data: action.payload };
    case types.GET_DATA_DETAIL:
      return { ...state, data: action.payload };
    case types.ADD_DATA:
      return { ...state, data: action.payload };
    case types.HAPUS_DATA:
      return { ...state, data: action.payload };
    default:
      return state
  }

}

export default allData;
