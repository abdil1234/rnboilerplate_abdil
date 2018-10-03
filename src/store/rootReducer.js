import { combineReducers } from 'redux';
import  dashboardReducer  from './dashboard/reducer';
import nav from './nav'

export default combineReducers({
    biodata: dashboardReducer,
    nav
});