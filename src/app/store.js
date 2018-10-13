import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import orderReducer from './reducers/orderReducer'
import loginReducer from './reducers/loginReducer'
import localStoreMiddleware from './middleware/localStoreMiddleware'

const loggerMiddleware = createLogger()
const rootReducer = combineReducers({loginReducer, orderReducer})

const store = createStore(rootReducer,
     applyMiddleware(thunkMiddleware, loggerMiddleware, localStoreMiddleware))

export default store
