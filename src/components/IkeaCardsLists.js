import React, { useEffect, useState } from "react";
import IkeaCard from "./IkeaCard/IkeaCard";
import SubscribeForm from "./SubscribeForm";
import SummaryCard from "./Summary/SummaryCard";
import * as subscriptionActions from '../actions/subscriptionActions';
import { toast } from "react-toastify";
import confused from '../assets/images/confusedPuppet.png';
import calling from '../assets/images/callingPuppet.png';
import * as packageActions from '../actions/packageActions';
import PackageStore from '../stores/packageStore';
import packageStore from "../stores/packageStore";

const IkeaCardsList = props => {
    const [errors, setErrors] = useState({});

    const [donations] = useState([0, 1, 2, 5, 10, 20, 50]);

    const [subscription, setSubscription] = useState({
        name    : "",
        email   : "",
        package : getSelectedPackageValue(),
        donation: "",
        total: 0
    });

    useEffect(() => {
        async function onPackageSelectedChange() {
            const selectedPackage = getSelectedPackageValue();

            if (selectedPackage !== "") {
                subscription.package = selectedPackage;
            }
        }

        PackageStore.addChangeListener(onPackageSelectedChange);
        return () => PackageStore.removeChangeListener(onPackageSelectedChange);
    }, [props.packages, subscription]);

    function getSelectedPackageValue() {
        let _package = PackageStore.getSelectedPackage();

        if (typeof _package !== 'undefined') {
            return _package.value;
        }

        return '';
    }



    function handleChange({target}) {
        let _subscription = {
            ...subscription,
            [target.name]: target.value
        };

        setSubscription(_subscription);

        if (typeof _subscription.package !== 'undefined' && _subscription.package !== '') {
            packageActions.selectPackage(
                props.packages.filter(_package => _package.value === _subscription.package)[0]
            );
        }
    }

    function getTotal() {
        let item     = packageStore.getSelectedPackage();
        if (typeof item === 'undefined') {
            return 0;
        }

        let donation = subscription.donation || '0';

        return parseFloat(item.costs) + parseFloat(donation);
    }

    function formIsValid() {
        const _errors = {};

        if (!subscription.name) _errors.name = "Naam is verplicht.";
        if (!subscription.email) _errors.email = "E-mail is verplicht.";
        if (!subscription.package) _errors.package = "Je moet wel een pakketje selecteren.";

        setErrors(_errors);
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (! formIsValid()) {
            return;
        }

        subscriptionActions.saveSubscription(subscription).then(() => {
            setSubscription({
                name    : "",
                email   : "",
                package : getSelectedPackageValue(),
                donation: "",
                total: 0,
            });

            toast.success("Thanks voor de box.");
        });
    }

    return (
        <>

            <IkeaCard>
                <SubscribeForm
                    subscription={subscription}
                    packages={props.packages}
                    donations={donations}
                    total={getTotal()}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                    errors={errors}
                />
            </IkeaCard>
            <SummaryCard subscription={subscription} total={getTotal()} packages={props.packages}/>
            <IkeaCard>
                <div className="row information">
                    <div className="col-6">
                        <img className="w-100" height="150" src={confused} alt="Confused"/>
                    </div>
                    <div className="col-6">
                        <img className="w-100" height="150" src={calling} alt="Calling"/>
                    </div>
                </div>
            </IkeaCard>
        </>
    )
}

export default IkeaCardsList;
