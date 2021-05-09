import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


let initData = {
    users: {},
    listuser:[],
    studentcourses:[],
   // currentUser: {}
}

function userSection(state = initData, action) {
    state = {...state};

    state = JSON.parse(JSON.stringify(state))
 if(action.type=="USER_List"){
        
        state.listuser=action.data;
    }
    return state;

}

let reducers = combineReducers({ userSection })

let store = createStore(reducers,{}, applyMiddleware(thunk));


export default store;