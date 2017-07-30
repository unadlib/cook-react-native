/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午5:41
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import {combineReducers} from "redux";
import Goods from "./model/Goods";
import home from "./ui/home";

const rootReducer = combineReducers({
    home,
    Goods,
});
export default rootReducer;
