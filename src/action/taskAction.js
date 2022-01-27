import { LOAD_USERS_LOADING,LOAD_USERS_SUCCESS,LOAD_USERS_ERROR } from "./index";
import Api from "../api"
const api = "https://5f3edf2513a9640016a69257.mockapi.io/hotels"

export const taskAction = () => dispatch => {
    dispatch({ type: LOAD_USERS_LOADING });
    Api.getUsers()
        .then(response => response.json())
        .then(
            data => dispatch({ type: LOAD_USERS_SUCCESS, data }),
            error => dispatch({ type: LOAD_USERS_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
 };