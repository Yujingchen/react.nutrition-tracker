import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../store/reducers/rootReducer";
import thunk from 'redux-thunk';

export function configureStore() {
    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk),
            composeEnhancers()
        )
    );
    return store;
}


