import * as types from './actionTypes';

const datas = [
    {
        id:1, name: "abdiillah"
    },
    {
      id:2, name: "sasuke"
    },
    {
      id:3, name: "naruto"
    },
    {
      id:4, name: "boruto"
    },
    {
      id:5, name: "kawaki"
    },
]; 

export const getData = () => {  
  return (dispatch) => {
    dispatch(dataSuccess(datas));
  }   
}

export const detailData = (id) => {  
  return (dispatch) => {
    const artikelDetail =  artikel.filter(data => data.id === parseInt(id, 10));
    dispatch(detailSuccess(artikelDetail[0]));
  } 
}

const dataSuccess = (datas) => ({
  type: types.GET_DATA,
  payload: datas
});

const detailSuccess = (artikelDetail) => ({
  type: types.GET_DATA_DETAIL,
  payload: artikelDetail
});

