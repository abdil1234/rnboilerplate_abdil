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

export const addData = (nama) => {  
  return (dispatch, getState) => {
    let newData = [...getState().biodata.data,{id:getState().biodata.data.length+1, name:nama}];
    dispatch(tambahSuccess(newData));
  }   
}

export const deleteData = (id) => {  
  return (dispatch, getState) => {
    let newData = [...getState().biodata.data];
    newData.filter((data, index) =>{
      if(data.id === id){
        newData.splice(index, 1);
      }
    });    
    dispatch(hapusSuccess(newData));
  }   
}

export const editData = (id, nama) => {  
  return (dispatch, getState) => {
    let newData = [...getState().biodata.data];
    newData.map((item, index) => {
      if(item.id == id){
        item.name= nama;
      }        
    });
    dispatch(detailSuccess(newData));
  } 
}

const dataSuccess = (datas) => ({
  type: types.GET_DATA,
  payload: datas
});

const tambahSuccess = (nama) => ({
  type: types.ADD_DATA,
  payload: nama
});

const hapusSuccess = (data) => ({
  type: types.ADD_DATA,
  payload: data
});

const detailSuccess = (artikelDetail) => ({
  type: types.GET_DATA_DETAIL,
  payload: artikelDetail
});

