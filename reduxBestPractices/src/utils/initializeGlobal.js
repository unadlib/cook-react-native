/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午7:12
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import _ from "lodash";

export default function (global) {
    global._ = _;
    if (!__DEV__) {
        global.console = new Proxy({}, {
            get(){
                return () => {
                }
            }
        });
    }
}
