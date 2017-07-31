/**
 * Author   : unadlib
 * Date     : 2017/7/31
 * Time     : 下午4:04
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import {ORM} from "redux-orm";
import Goods from "./Goods";
import Users from "./Users";

const models = new ORM();
models.register(Goods, Users);
export default models;
