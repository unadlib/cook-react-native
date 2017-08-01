/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午6:00
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import {normalize} from "normalizr";
import actionTypes from "../actionTypes";

export default ({dispatch, getState}) => next => action => {
    let {meta, payload} = action;
    let isLoadedDataWithSchema = payload && payload.data && meta && meta.schema && meta.selector;
    if (!!isLoadedDataWithSchema) {
        let normalizeData = parseSelectorLoadData(action.payload.data, meta.selector, meta.schema);
        Object.keys(normalizeData.entities).map(i => {
            let actionConfig = {
                type: actionTypes[i.toUpperCase()].MODEL_UPDATE,
                model: normalizeData.entities[i]
            };
            dispatch(actionConfig);
        });
    }
    return setTimeout(next.bind(this, action));
}

function parseSelectorLoadData(data, selector, schema) {
    selector = selector.split(".");
    if (selector.length > 1) {
        return parseSelectorLoadData(data[selector.shift()], selector.join("."), schema);
    } else {
        let normalizeData = normalize(data[selector[0]], schema);
        data[selector[0]] = normalizeData.result;
        return normalizeData;
    }
}
