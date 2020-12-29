import dispatcher from '../AppDispatcher';
import actionTypes from "./actionTypes";

export function selectPackage(_package) {
    dispatcher.dispatch({
        type  : actionTypes.SELECT_PACKAGE,
        package: _package
    });
}
