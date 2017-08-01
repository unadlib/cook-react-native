/**
 * Author   : unadlib
 * Date     : 2017/7/31
 * Time     : 下午4:07
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import {Model, fk, attr} from 'redux-orm';
import {ormReducer} from "./index";
import actionTypes from "../../actionTypes";
const {GOODS: {MODEL_UPDATE}} = actionTypes;

export default class Goods extends Model {
    static modelName = 'Goods';
    static options = {
        idAttribute: "id",
    };
    static fields = {
        id: attr(),
        user: fk('Users'),
    };
}

export const goods = {
    [MODEL_UPDATE]: ormReducer(({Goods}, state, {model}) => {
        Object.keys(model).map(i => Goods.create(model[i]))
    }),
};
