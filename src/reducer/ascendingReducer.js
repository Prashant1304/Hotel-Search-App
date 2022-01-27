const initialState = {
    data1:1
}

function ascendingReducer(state= initialState,action) {
    switch(action.type) {
        case "ASCENDING":
            return {...state,data1:state.data1+1}
    }
    return state
}

export default ascendingReducer