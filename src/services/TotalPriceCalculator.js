import packageStore from "../stores/packageStore";


export async function calculateTotal(subscription) {
    let item = packageStore.getSelectedPackage();

    subscription.total = parseFloat(item.costs) + parseFloat(subscription.donation);

    return subscription;
}
