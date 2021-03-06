/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午7:22
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import {createActions} from "redux-actions";
import actionTypes from "../actionTypes";
import {API} from "../../configs/settings/profile";
import convertParams from "../../utils/convertParams";
import {GoodsList} from '../schema';

const {HOME: {GOODS_LIST}} = actionTypes;

export const {
    homeGoodsListFetch,
} = createActions({
    [GOODS_LIST[0]]: [
        (params = {}) => ({
            ...convertParams(API.goods, params),
            status: [...GOODS_LIST],
        }),
        () => ({
            schema: GoodsList,
            selector: 'result'
        })
    ]
});
