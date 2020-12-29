import React from "react";
import IkeaCard from "../IkeaCard/IkeaCard";
import * as packageActions from '../../actions/packageActions';
import './package.scss';

const PackageCard = props => {
    return (
        <div onClick={() => packageActions.selectPackage(props.package)} className={props.package.selected ? 'is-active col-12 package' : 'col-12 package'}>
            <IkeaCard>
                <div className="row ">
                    <div className="col-3">
                        <h3>{props.package.costs} Euro</h3>
                    </div>
                    <div className="col">
                        <h3 key={props.package.label}>{props.package.label}</h3>
                            <ul className="list-unstyled">
                                <li>WWW Eten</li>
                                <li>Vuur pakket</li>
                                <li>Diverse WWW attributen</li>
                                {props.package.content.map(function (description, index) {
                                    return <li key={props.package.value + '-' + index}>{description}</li>
                                })}
                            </ul>

                    </div>
                    <div className="col align-items-center justify-content-center d-flex">
                        <img className="w-auto " height="100" src={`/${props.package.value}.png`} alt="Bier"/>
                    </div>
                </div>
            </IkeaCard>
        </div>
    )
}

export default PackageCard;
