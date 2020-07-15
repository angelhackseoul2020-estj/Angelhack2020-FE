import { createAction, handleActions } from 'redux-actions';

const SET_ALERT = "SET_ALERT"

export const setAlertPopup = createAction(SET_ALERT);

const initialState = {
    alert: false
}

export default handleActions({
    [SET_ALERT]: (state, action) => {
        const newState = {
            ...state,
            alert: action.payload
        }
        return newState
    }
}, initialState);