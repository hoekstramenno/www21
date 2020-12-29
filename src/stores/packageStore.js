import { EventEmitter } from 'events';
import dispatcher from "../AppDispatcher";
import actionTypes from "../actions/actionTypes";

const SELECT_EVENT = 'select';

let _packages = [
    {
        'value'   : 'pils',
        'label'   : 'Pils',
        'content' : [
            'Pils blikjes'
        ],
        'costs'   : 15,
        'selected': false,
    }, {
        'value'   : 'special-beer-1',
        'label'   : 'Speciaal Bier',
        'content' : [
            'Standaard Speciaal bier'
        ],
        'costs'   : 20,
        'selected': false
    },
    {
        'value'  : 'special-beer-2',
        'label'  : 'Speciaal Speciaal Bier',
        'content': [
            'Onbekend Speciaal Bier'
        ],
        'costs'  : 25,
        'selected'  : false,
    },
    {
        'value'  : 'red-wine',
        'label'  : 'Rode wijn',
        'content': [
            'Rode wijn'
        ],
        'costs'  : 20,
        'selected'  : false,
    },
    {
        'value'  : 'white-wine',
        'label'  : 'Witte wijn',
        'content': [
            'Witte wijn'
        ],
        'costs'  : 20,
        'selected'  : false,
    },
    {
        'value'  : 'cola',
        'label'  : 'Cola',
        'content': [
            'Cola'
        ],
        'costs'  : 12.50,
        'selected'  : false,
    },
    {
        'value'  : 'non-alcohol',
        'label'  : 'Geen alcohol',
        'content': [
            'Sapjes en drankjes zonder alcohol'
        ],
        'costs'  : 12.50,
        'selected'  : false,
    },
];

class PackageStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(SELECT_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(SELECT_EVENT, callback)
    }

    emitChange() {
        this.emit(SELECT_EVENT)
    }

    getPackages() {
        return _packages;
    }

    getSelectedPackage() {
        return _packages.filter(_package => _package.selected === true)[0];
    }

    getPackageByValue(_packageValue) {
        return _packages.filter(_package => _package.value === _packageValue)[0];
    }
}

const packageStore = new PackageStore();

dispatcher.register(action => {
    switch (action.type) {
        case actionTypes.SELECT_PACKAGE:

            packageStore.getPackages().map(function (_package) {
                _package.selected = _package.value === action.package.value;
                return _package;
            });

            packageStore.emitChange();
        break;

        case actionTypes.REMOVE_SELECTION:

            packageStore.getPackages().map(function (_package) {
                _package.selected = false;
                return _package;
            });

            packageStore.emitChange();
            break;

        default:
        // omit for a reason
    }
});

export default packageStore;
