/**
 * Author   : unadlib
 * Date     : 2017/7/31
 * Time     : 下午4:07
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import {Model, fk, attr} from 'redux-orm';

export default class Goods extends Model {
    static reducer(action, Goods, Session) {
        const {payload, type} = action;
        switch (type) {
            case "CREATE_GOODS":
                Goods.create({id: 1, name: "xxx"});
                break;
        }
    }
}

Goods.modelName = 'Goods';
Goods.options = {
    idAttribute: "id",
};
Goods.fields = {
    id: attr(),
    // user: fk('Users'),
};