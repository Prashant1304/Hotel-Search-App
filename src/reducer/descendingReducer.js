const initialState = {
    data2:2
}

function descendingReducer(state= initialState,action) {
    switch(action.type) {
        case "DECREMENT":
            return {...state,data2:state.data2+1}
    }
    return state
}

export default descendingReducer