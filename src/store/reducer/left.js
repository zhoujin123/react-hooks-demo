import { CHANGE_MENU } from '../actionTypes'
const defaultState = {
    currentMenu: '1'
}
export default function left(state = defaultState,action){
    if(action.type === CHANGE_MENU){
        let newState = JSON.parse(JSON.stringify(state))
        newState.currentMenu = '2'
        return newState
    }
    return state
}
