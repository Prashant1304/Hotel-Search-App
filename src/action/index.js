export const ascending =() => {
    return {
        type:"ASCENDING"
    }
}

export const descending =() => {
    return {
        type:"DESCENDING"
    }
}

export const search = () => {
    return {
        type:"SEARCH"
    }
}


export const LOAD_USERS_LOADING = 'REDUX_THUNK_LOAD_USERS_LOADING';
export const LOAD_USERS_SUCCESS = 'REDUX_THUNK_LOAD_USERS_SUCCESS';
export const LOAD_USERS_ERROR = 'REDUX_THUNK_LOAD_USERS_ERROR';