/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午7:02
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import React, {Component} from "react";
import {View, Text} from "react-native";
import Home from "../containers/main/Home";

class Router extends Component {
    render() {
        return (
            <Home/>
        );
    }

}

const style = {
    container: {
        flex: 1,
    }
};
export default Router;
