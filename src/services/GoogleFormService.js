const MACRO_KEY = process.env.REACT_APP_GOOGLE_FORMS_MACRO_KEY;

export function saveSubscription(subscription) {
    const scriptURL = 'https://script.google.com/macros/s/' + MACRO_KEY + '/exec'

    const form = new FormData();

    for (let key in subscription) {
        form.append(key, subscription[key]);
    }

    return fetch(scriptURL, {method: 'POST', body: form});
}

