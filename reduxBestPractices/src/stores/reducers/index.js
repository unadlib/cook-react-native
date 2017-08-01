/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午5:41
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import {combineReducers} from "redux";
import home from "./ui/home";
import {model} from "./models";

const rootReducer = combineReducers({
    model,
    home,
});
export default rootReducer;
