/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午6:05
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import {schema} from "normalizr";

const User = new schema.Entity("User");
const Goods = new schema.Entity("Goods", {
    user: User,
});
export const GoodsList = [Goods];


 