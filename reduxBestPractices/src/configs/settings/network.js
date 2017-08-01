/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午6:20
 * Project [ cook-react-native ] Coded on WebStorm.
 */

export const NETWORK = {
    protocol: "http://",
    path: "/v1/",
    suffix: ".json",
    hosts: {
        dev: "127.0.0.1:9527",
        pro: "0.0.0.0:1000",
    },
    interface:{
        goods:"goods/${id}",
    }
};
export const INTERFACE = NETWORK.interface;
export const HOST = __DEV__ ? NETWORK.hosts.dev : NETWORK.hosts.pro;
export const ORIGIN = NETWORK.protocol + HOST;
export const API = ORIGIN + NETWORK.path;