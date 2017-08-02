/**
 * Author   : unadlib
 * Date     : 2017/7/50
 * Time     : 下午5:31
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import React, {Component} from "react";
import {Provider} from "react-redux";
import initializeGlobal from "./utils/initializeGlobal";
import Router from "./containers/Router";
import configureStore from "./stores/reducers/configureStore";
import initialStore from "./stores/reducers/initialStore";

initializeGlobal(global);
const store = configureStore(initialStore);

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }

}

export default App;