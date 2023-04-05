import { combineReducers } from 'redux'
import { BurgerReducer}  from '../reducers/BurgerReducer'
//store of stores
export const rootReducer = combineReducers({
    BurgerReducer,
})

export default rootReducer;