import { LOAD_USERS_LOADING,LOAD_USERS_SUCCESS,LOAD_USERS_ERROR } from "../action/index";

const initialState = {
    data:[],
    loading:false,
    error:""
}

function apiReducer(state = initialState,action) {
    //this page is rendering 5 times
    switch(action.type) {
        case LOAD_USERS_LOADING: {
            return {
                ...state,
                loading: true,
                error:''
            };
        }
        case LOAD_USERS_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
        case LOAD_USERS_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
        default: {
            return state;
        }
    }
}

export default apiReducer