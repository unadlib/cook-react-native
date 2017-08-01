/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午6:30
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import {INTERFACE} from "./network";


export const profile = {
    API: {
        goods: {
            url: INTERFACE.goods,
            params: {
                "${id}":"${id}",
                demo: "${id+id}_test"
            },
        }
    }
};
export const API = profile.API;