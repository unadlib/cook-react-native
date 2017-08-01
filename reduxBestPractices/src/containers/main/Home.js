/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午7:03
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createSelector} from 'reselect';
import {createSelector as ormSelector} from 'redux-orm';
import connectComponent from '../../stores/connectComponent';
import {denormalize} from 'normalizr';
import {GoodsList} from '../../stores/schema';
import models from '../../stores/reducers/models';
import {homeGoodsListFetch} from '../../stores/actions/home';

class Home extends Component {

    componentDidMount() {
        this.props.$fetch({id: 1});
    }

    render() {
        let {data: {home = []}} = this.props;
        console.log(this.props);
        return (
            <View style={style.container}>
                {
                    home.map((i = {}, key) => {
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
    state => state.model,
    state => state,
    ormSelector(models, (orm, state) => {
        let {model: {Goods: {itemsById: Goods}, Users: {itemsById: Users}}, home: {list}} = state;
        return {
            home: denormalize(list, GoodsList, {Goods, Users}),
            goods: orm.Goods.all().toRefArray()
        }
    })
);
export const mapDispatchToProps = (dispatch, props) => ({
    $fetch: (...arg) => dispatch(homeGoodsListFetch(...arg)),
});
export default connectComponent({LayoutComponent, makeSelector, mapDispatchToProps});
