/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午5:37
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk"
import {AsyncStorage} from "react-native";
import {persistStore, autoRehydrate} from "redux-persist";
import reducers from "../reducers";
import middlewares from "../middlewares";

const enhancer = compose(
    applyMiddleware(
        thunk,
        ...middlewares
    ),
    autoRehydrate()
);
export default (initialStore = {}) => {
    let rootStore = createStore(
        reducers,
        initialStore,
        enhancer,
    );
    persistStore(rootStore, {storage: AsyncStorage});
    return rootStore;
};
