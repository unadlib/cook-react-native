/**
 * Author   : unadlib
 * Date     : 2017/7/31
 * Time     : 下午4:08
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import {Model} from 'redux-orm';
import {ormReducer} from "./index";
import actionTypes from "../../actionTypes";
const {USERS: {MODEL_UPDATE}} = actionTypes;

export default class Users extends Model {
    static modelName = 'Users';
    static options = {
        idAttribute: "id",
    };
}

export const users = {
    [MODEL_UPDATE]: ormReducer(({Users}, state, {model}) => {
        Object.keys(model).map(i => Users.create(model[i]))
    }),
};


