import { applyMiddleware,createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from "redux-thunk";
import rootReducer from "../reducer/rootReducer";

function ConfigStore(preloadState) {
    let middleware = [thunk]
    let middlewareEnhancer = applyMiddleware(...middleware)
    let storeEnhancer = [middlewareEnhancer]
    let composeEnhancer = composeWithDevTools(...storeEnhancer)

    const store = createStore(
        rootReducer,
        preloadState,
        composeEnhancer
    )

    if(process.env.NODE_ENV !== "production") {
        if(module.hot) {
            module.hot.accept("../reducer/rootReducer",() => {
                const newRootReducer = require("../reducer/rootReducer").default
                store.replaceReducer(newRootReducer)
            })
        }
    }
    return store
}

export default ConfigStore