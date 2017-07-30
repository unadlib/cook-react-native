/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午5:40
 * Project [ cook-react-native ] Coded on WebStorm.
 */

export const FETCH_STATUS = [
    "FETCH",
    "FETCH_SUCCESS",
    "FETCH_FAILURE"
];

export const CONSTANT = {
    HOME: {
        FETCH: [
            "GOODS_LIST"
        ],
        COMMON: [
            "CHANGE_TAG"
        ],
    },
};

const getActionTypes = (CONSTANT = {}, FETCH_STATUS = []) => {
    let ACTION_TYPE = {};
    Object.keys(CONSTANT).map(i => {
        let FETCH = CONSTANT[i].FETCH || [],
            COMMON = CONSTANT[i].COMMON || [];
        FETCH.map(f => {
            let key = `${i}_${f}`;
            ACTION_TYPE[key] = FETCH_STATUS.map(s => `${key}_${s}`);
        });
        COMMON.map(c => {
            let key = `${i}_${c}`;
            ACTION_TYPE[key] = key;
        });
    });
    return ACTION_TYPE;
};

export default getActionTypes(CONSTANT, FETCH_STATUS);

