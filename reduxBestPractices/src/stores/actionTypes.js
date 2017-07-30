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
    GOODS: {
        COMMON: [
            "MODEL_UPDATE"
        ],
    },
    USERS: {
        COMMON: [
            "MODEL_UPDATE"
        ],
    }
};

const getActionTypes = (CONSTANT = {}, FETCH_STATUS = []) => {
    let ACTION_TYPE = {};
    Object.keys(CONSTANT).map(i => {
        let FETCH = CONSTANT[i].FETCH || [],
            COMMON = CONSTANT[i].COMMON || [];
        ACTION_TYPE[i] = {};
        FETCH.map(f => {
            ACTION_TYPE[i][f] = FETCH_STATUS.map(s => `${i}_${f}_${s}`);
        });
        COMMON.map(c => {
            ACTION_TYPE[i][c] = `${i}_${c}`;
        });
    });
    return ACTION_TYPE;
};

export default getActionTypes(CONSTANT, FETCH_STATUS);

