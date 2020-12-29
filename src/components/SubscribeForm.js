import React from "react";
import TextInput from "./Common/TextInput";
import PropTypes from "prop-types";

function SubscribeForm(props) {
    return (
        <>
            <h2>Inschrijven</h2>
        <form onSubmit={props.onSubmit}>
            <TextInput
                id="name"
                label="Naam"
                onChange={props.onChange}
                name="name"
                value={props.subscription.name}
                error={props.errors.name}
            />

            <TextInput
                id="email"
                label="E-mail"
                onChange={props.onChange}
                name="email"
                type="email"
                value={props.subscription.email}
                error={props.errors.email}
            />

            <div className="form-group">
                <label htmlFor="package">Pakket</label>
                <div className="field">
                    <select
                        id="package"
                        name="package"
                        onChange={props.onChange}
                        value={props.subscription.package}
                        className="form-control"
                    >
                        <option value="" />
                        {props.packages.map((_package, index) =>
                            <option key={_package.value} value={_package.value}>{_package.label} - {_package.costs} euro</option>
                        )}
                    </select>
                </div>
                {props.errors.package && (
                    <div className="alert alert-danger">{props.errors.package}</div>
                )}
            </div>
            <div className="form-group">
                <label htmlFor="donation">Optionele donatie aan de Willies na een zwaar verhuur jaar</label>
                <div className="field">
                    <select
                        id="donation"
                        name="donation"
                        onChange={props.onChange}
                        value={props.subscription.donation || ''}
                        className="form-control"
                    >
                        <option value="">Graag kiezen</option>
                        {props.donations.map((donation, index) =>
                            <option key={donation} value={donation}>{donation} euro</option>
                        )}
                    </select>
                </div>
                {props.errors.donation && (
                    <div className="alert alert-danger">{props.errors.donation}</div>
                )}
            </div>
            <input type="submit" value="Inschrijven" className="btn btn-lg btn-primary" />
        </form>
        </>
    );
}

SubscribeForm.propTypes = {
    subscription: PropTypes.object.isRequired,
    donations: PropTypes.array.isRequired,
    packages: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

export default SubscribeForm;
