/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午7:02
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import React, {Component} from "react";
import {View, Text} from "react-native";

class Router extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text>
                    Router
                </Text>
            </View>
        );
    }

}

const style = {
    container: {
        flex: 1,
    }
};
export default Router;
