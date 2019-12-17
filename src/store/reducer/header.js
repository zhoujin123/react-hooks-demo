import { CHANGE_LEFT_NAV } from '../actionTypes'
const defaultState = {
    userName: '半暖半夏',
    leftStatus: true,
    refesh: false
}
export default function header(state = defaultState,action){
    if(action.type === CHANGE_LEFT_NAV){
        let newState = JSON.parse(JSON.stringify(state))
        newState.leftStatus = !newState.leftStatus
        newState.userName = "臧三"
        return newState
    }
    return state
}
