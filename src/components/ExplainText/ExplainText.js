import React, { useState } from "react";
import PackageList from "../Packages/PackageList";

function ExplainText(props) {
    const [tabActive, setTabActive] = useState('explain');

    return (
        <div>
            <div className="btn-group mb-4" role="group" aria-label="Info">
                <button onClick={() => setTabActive('explain')} type="button" data-link='explain' className={`btn btn-secondary ${tabActive === 'explain' ? 'active' : ''}`}>Uitleg</button>
                <button onClick={() => setTabActive('packages')} type="button" data-link='packages' className={`btn btn-secondary ${tabActive === 'packages' ? 'active' : ''}`}>Pakketten</button>
            </div>
            <div className={tabActive === 'explain' ? 'd-block' : 'd-none'}>
            <p>
                <strong>LEFFEBEK, GRÖOTVUR, WILLIE en GELUID</strong>. <br/>
                <em>Bijna elke Nederlander kent deze iconen uit Zandvoort, die staan voor gezelligheid en plezier. Begin 2000 opende de WILLIES haar eerste weekend in Nederland. Nu, 18 jaar later, hebben wij onze eerste DIY editie.
                We hebben een passie voor het leven outdoor. Onze cultuur is ontstaan vanuit enthousiasme, samenhorigheid en een ‘aan-de-slag’-houding. We zijn optimisten en voortdurend op zoek naar nieuwe en betere manieren om het weekend te vieren.
                    Van het ontwerp van een chalet die in een goed Duits thema past, tot het maken van een Sauna die voor iedereen beschikbaar was. Onze visie is om uit het dagelijks leven te ontsnappen met een gezellig weekend.</em>
            </p>
            <p>
                Dit jaar organiseren wij de <strong>WILLIE WINTER EXPERIENCE</strong>; haal WWW bij je thuis.  Dit jaar hebben wij ook rekening gehouden met de non-alcoholische liefhebber.
            </p>
            <p>
                Kies hier je pakket hieronder en schrijf je in!. Op zaterdag 16 januari 2020 maken we het pakket open om 20:00 om te genieten van alle zaken dat WWW al 18 jaar bijzonder maakt.
            </p>
            <p>
                Dit jaar is het goede doel Scouting Stella Maris - St. Willibrordus in Zandvoort. Zij hebben te weinig verhuurt in 2020 en moeten hierdoor op de kleintjes letten. Hier heeft iedereen in de groep last van, van de leden tot en met de vrijwilligers.
                Er is ook een mogelijkheid om een cadeautje te doen aan ons goede doel door middel van een kleine donatie.
            </p>
            <p>
                Meer informatie over ophalen van het pakket, afrekening van de kosten en instructies voor de box krijg je later via e-mail.
            </p>
            </div>
            <div className={tabActive === 'packages' ? 'd-block' : 'd-none'}>
            <PackageList packages={props.packages} />
            </div>
        </div>
    )
}

export default ExplainText;
