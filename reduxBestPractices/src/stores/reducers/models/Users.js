/**
 * Author   : unadlib
 * Date     : 2017/7/31
 * Time     : 下午4:08
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import {Model} from 'redux-orm';

export default class Users extends Model {
    static reducer(state, action, Goods, session) {
        const {payload, type} = action;
        switch (type) {
            case "XXX":
                // Goods.withId(payload.todo).tags.remove(payload.tag);
                break;
        }
    }
}

Users.modelName = 'Users';
Users.options = {
    idAttribute: "id",
};
