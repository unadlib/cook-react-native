/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午6:17
 * Project [ cook-react-native ] Coded on WebStorm.
 */


import {API, NETWORK} from "../../configs/settings/network";

export default ({dispatch, getState}) => next => action => {
    console.log(action);
    next(action);
    const {payload, ...rest} = action;
    if (!payload || payload && !payload.url) return;
    let {url, params, options, status: [REQUEST, SUCCESS, FAILED]} = payload;
    let success = responseData => next({
        ...rest,
        type: SUCCESS,
        payload: {
            ...payload,
            data: responseData,
        }
    });
    let error = error => next({
        ...rest,
        type: FAILED,
        payload,
        error,
    });
    if (toString.call(url) === "[object String]") {
        return fetch(getUrl(url, params), options)
            .then(response => response.json())
            .then(success)
            .catch(error);
    } else if (toString.call(url) === "[object Array]" && url.length > 0) {
        return Promise.all(url.map((i, k) => fetch(getUrl(i, params[k]), options[k])))
            .then(values => Promise.all(values.map(val => val.json())))
            .then(success)
            .catch(error);
    }
}

function getUrl(url, params, isEnableCache) {
    let cacheParam = !isEnableCache ? {_: (+new Date())} : {};
    let getItem = (allParams, i) => [encodeURIComponent(i), "=", encodeURIComponent(allParams[i])].join("");
    let allParams = {
        ...params,
        ...cacheParam,
    };
    return [
        API, url, NETWORK.suffix, "?",
        Object.keys(allParams)
            .map(i => getItem(allParams, i))
            .join("&")
    ].join("");
}