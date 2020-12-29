import React from "react";
import PackageCard from "./PackageCard";
import './packageList.scss';

const PackageList = props => {
    return (
        <div className="packageList">
            <h3 className="mb-4">Pakketten</h3>
            <div className="row" >
                {props.packages.map((_package, index) =>
                    <PackageCard key={index} package={_package}/>
                )}
            </div>
        </div>
    )
}

export default PackageList;
