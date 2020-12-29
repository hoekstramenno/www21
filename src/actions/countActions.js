import dispatcher from '../AppDispatcher';
import actionTypes from "./actionTypes";

export function addCount(count) {
    dispatcher.dispatch({
        type  : actionTypes.ADD_COUNT,
        count: count
    });
}
