import { combineReducers } from 'redux';
import  dashboardReducer  from './dashboard/reducer';
import  sessionReducer  from './session';
import nav from './nav'

export default combineReducers({
    biodata: dashboardReducer,
    session: sessionReducer,
    nav
});