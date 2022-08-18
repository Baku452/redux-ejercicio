import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { voteReducer } from "./reducers/votesReducer"


export default createStore(voteReducer, composeWithDevTools())
