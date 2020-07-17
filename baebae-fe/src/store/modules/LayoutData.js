import { createAction, handleActions } from 'redux-actions';

const SET_OPEN_MENU = "layout/SET_OPEN_MENU"

export const setOpenMenu = createAction(SET_OPEN_MENU);

const initialState = {
    openMenu: false
}

export default handleActions({
    [SET_OPEN_MENU]: (state, action) => {
        const newState = {
            ...state,
            openMenu: action.payload
        }
        return newState
    }
}, initialState);