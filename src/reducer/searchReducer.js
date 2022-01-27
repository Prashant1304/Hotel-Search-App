//not used

const initialState = {
    data3:3
}

function searchReducer(state= initialState,action) {
    switch(action.type) {
        case "SEARCH":
            return {...state,data3:state.data3+1}
    }
    return state
}

export default searchReducer