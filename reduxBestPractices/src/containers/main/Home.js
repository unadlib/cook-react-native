/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午7:03
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createSelector} from 'reselect';
import connectComponent from '../../stores/connectComponent';
import {denormalize} from 'normalizr';
import {GoodsList} from '../../stores/schema';
import {homeGoodsListFetch} from '../../stores/actions/home';

class Home extends Component {

    componentDidMount() {
        this.props.$fetch();
    }

    render() {
        let {data = []} = this.props;
        return (
            <View style={style.container}>
                {
                    data.map((i = {}, key) => {
                        let {text = ""} = i;
                        return <Text key={key}>{text}</Text>
                    })
                }
            </View>
        );
    }

}

const style = {
    container: {
        flex: 1,
    }
};

export const LayoutComponent = Home;
export const makeSelector = () => createSelector(
    [
        (state, props) => {
            let {home, Goods, Users} = state;
            return denormalize(home.list, GoodsList, {Goods, Users})
        }
    ],
    (data) => data
);
export const mapDispatchToProps = (dispatch, props) => ({
    $fetch: (...arg) => dispatch(homeGoodsListFetch(...arg)),
});
export default connectComponent({LayoutComponent, makeSelector, mapDispatchToProps});
