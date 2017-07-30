/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午5:41
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import fetch from "./fetch";
import normalizr from "./normalizr";

const middlewares = [
    fetch,
    normalizr,
];

export default middlewares;
