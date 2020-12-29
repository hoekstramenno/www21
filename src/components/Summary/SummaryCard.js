import React from 'react';
import ExplainPuppet from "../IkeaPuppets/ExplainPuppet";
import packageStore from "../../stores/packageStore";

function SummaryCard(props) {
    function getGreeting(name) {
        if (name) {
            return <strong>Hallo, {name}!</strong>;
        }
        return <strong>Hallo, WWW'er!</strong>;
    }

    function getDonationStatus() {
        if (props.subscription.donation === '') {
            return;
        }

        if (parseInt(props.subscription.donation, 10) === 0) {
            return 'Geen donatie? Dat is jammer! Geef om dit kind.';
        }

        return 'Dank je voor je donatie! :-)';
    }


    return (
        <>
            <div className="row mb-4">
                <div className="col-3 m-0 align-items-center justify-content-center d-flex">
                    <ExplainPuppet/>
                </div>
                <div className="col-9">
                    <div className="ikea-card">
                        <div className="w-100">
                            {getGreeting(props.subscription.name)}
                        </div>
                        <div className="row">
                            <div className="col">
                                {props.subscription.package &&
                                <div>
                                    <h4>Pakket {packageStore.getSelectedPackage()?.label}</h4>
                                    <h5>Kosten: {props.total} euro</h5>
                                </div>
                                }
                                {getDonationStatus()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SummaryCard;
