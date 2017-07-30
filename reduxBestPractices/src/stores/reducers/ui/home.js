/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午6:12
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import {handleActions} from "redux-actions";
import actionTypes from "../../actionTypes";

const {HOME_GOODS_LIST} = actionTypes;
const initialState = {};
export default handleActions({
    [HOME_GOODS_LIST[0]]: (state, action) => ({
        ...state,
    }),
    [HOME_GOODS_LIST[1]]: (state, action) => ({
        ...state,
    }),
    [HOME_GOODS_LIST[2]]: (state, action) => ({
        ...state,
    })
}, initialState);