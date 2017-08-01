/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午7:30
 * Project [ cook-react-native ] Coded on WebStorm.
 */

export default (data, params) => {
    // TODO: The key of default null value is assigned in params.
    let str = JSON.stringify(data);
    let dataParsed = JSON.parse(_.template(str)(params));
    return dataParsed;
}