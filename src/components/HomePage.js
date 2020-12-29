import React, { useEffect, useState } from 'react';
import ExplainText from "./ExplainText/ExplainText";
import IkeaCardsLists from "./IkeaCardsLists";
import IkeaHeader from "./IkeaHeader/IkeaHeader";
import logo from '../assets/images/logo.png';
import PackageStore from '../stores/packageStore';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function HomePage() {
    const [packages, setPackages] = useState(PackageStore.getPackages());

    useEffect(() => {
        PackageStore.addChangeListener(onChange);
        return () => PackageStore.removeChangeListener(onChange);
    }, [packages]);

    function onChange() {
        setPackages(PackageStore.getPackages().map(_package => _package));
    }

    return (
        <div className="row">
            <div className="col-12 col-md-5 mr-md-auto">
                <IkeaHeader/>

                <ExplainText packages={packages}/>

                <div className="float-right">
                    <img src={logo} className="App-logo" width="110" alt="WWW 21"/>
                </div>
            </div>

            <div className="col-12 col-md-6 mt-3">
                <ToastContainer />
                <IkeaCardsLists packages={packages}/>
            </div>
        </div>
    );
}

export default HomePage;
