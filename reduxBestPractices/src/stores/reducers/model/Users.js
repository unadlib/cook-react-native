/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午11:41
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import {handleActions, createActions, combineActions} from 'redux-actions';
import actionTypes from '../../actionTypes';

const {USERS:{MODEL_UPDATE}} = actionTypes;
export const {
    usersModelUpdate
} = createActions({
    [MODEL_UPDATE]: (data) => ({
        model: data
    }),
});
export default handleActions({
    [usersModelUpdate]: (state, action) => ({
        ...state,
        ...action.payload.model
    })
}, {});
 