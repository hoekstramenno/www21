import { EventEmitter } from 'events';
import Dispatcher from "../AppDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = 'change';

class SubscriptionStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }

    emitChange() {
        this.emit(CHANGE_EVENT)
    }
}

const subscriptionStore = new SubscriptionStore();

Dispatcher.register(action => {
    switch (action.type) {
        case actionTypes.CREATE_SUBSCRIPTION:
            subscriptionStore.emitChange();
        break;

        default:
            // omit for a reason
    }
});

export default subscriptionStore;
