import dispatcher from '../AppDispatcher';
import actionTypes from "./actionTypes";
import * as GoogleFormService from "../services/GoogleFormService";
import * as TotalPriceCalculator from "../services/TotalPriceCalculator";

export function saveSubscription(subscription) {
    return TotalPriceCalculator.calculateTotal(subscription)
        .then((subscription) => {
            GoogleFormService.saveSubscription(subscription);
            return subscription;
        })
        .then(subscription => {
            dispatcher.dispatch({
                type  : actionTypes.REMOVE_SELECTION,
                subscription: subscription
            });
        });
}
