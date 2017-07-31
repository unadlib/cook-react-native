/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午5:41
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import {combineReducers} from "redux";
import Goods from "./model/Goods";
import Users from "./model/Users";
import home from "./ui/home";
import model from "./models";

const rootReducer = combineReducers({
    model: model.reducer(),
    home,
    Goods,
    Users,
});
export default rootReducer;
