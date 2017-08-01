/**
 * Author   : unadlib
 * Date     : 2017/7/31
 * Time     : 下午4:04
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import {ORM} from "redux-orm";
import {handleActions} from "redux-actions";
import Goods, {goods} from "./Goods";
import Users, {users} from "./Users";

const orm = new ORM();
orm.register(Goods, Users);
export default orm;

export const model = handleActions({
    ...goods,
    ...users,
}, orm.getEmptyState());

export function ormReducer(fn) {
    return (state, action) => {
        const session = orm.session(state);
        fn(session, state, action);
        return session.state;
    }
}