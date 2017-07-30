/**
 * Author   : unadlib
 * Date     : 2017/7/30
 * Time     : 下午5:35
 * Project [ cook-react-native ] Coded on WebStorm.
 */

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import actions from "./actions";

const options = {
    withRef: true
};
const defaultMapStateToProps = (state, props) => ({});
const defaultMapDispatchToProps = (dispatch, props) => ({
    actions: bindActionCreators(actions, dispatch)
});
const defaultMergeProps = (stateProps, dispatchProps, ownProps) => (
    Object.assign({}, ownProps, stateProps, dispatchProps)
);

const getMapStateToProps = (makeSelector) => () => (state, props) => ({
    data: makeSelector()(state, props),
});

export default ({makeSelector, mapStateToProps, mapDispatchToProps, mergeProps, LayoutComponent}) => (
    connect(
        mapStateToProps || makeSelector && getMapStateToProps(makeSelector) || defaultMapStateToProps,
        mapDispatchToProps || defaultMapDispatchToProps,
        mergeProps || defaultMergeProps,
        options
    )(LayoutComponent)
);
