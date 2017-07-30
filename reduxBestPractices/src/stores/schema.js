/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午6:05
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import {schema} from "normalizr";

const Users = new schema.Entity("Users");
const Goods = new schema.Entity("Goods", {
    user: Users,
});
export const GoodsList = [Goods];


 