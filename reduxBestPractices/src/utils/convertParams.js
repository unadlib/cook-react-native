/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午7:30
 * Project [ cook-react-native ] Coded on WebStorm.
 */

export default (data, obj) => {
    let str = JSON.stringify(data);
    let addObj = {};
    (str.match(/\$\{([a-zA-Z0-9\_\-]+)\}/g) || []).map(i => {
        let key = i.replace("${", "").replace("}", "");
        if (Object.keys(obj).indexOf(key) === -1) {
            addObj[key] = null;
        }
    });
    _.toPairs(_.assign(obj, addObj)).map(i => {
        str = str.replace(new RegExp(`\\$\\{${i[0]}\\}`, "g"), i[1]);
    });
    return JSON.parse(str);
}