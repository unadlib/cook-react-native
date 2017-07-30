/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午6:12
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import {handleActions} from "redux-actions";
import actionTypes from "../../actionTypes";

const {HOME: {GOODS_LIST}} = actionTypes;
const initialState = {};
export default handleActions({
    [GOODS_LIST[0]]: (state, action) => ({
        ...state,
    }),
    [GOODS_LIST[1]]: (state, {payload: {data}}) => ({
        ...state,
        list: [...data.result],
    }),
    [GOODS_LIST[2]]: (state, action) => ({
        ...state,
    })
}, initialState);