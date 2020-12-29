import packageStore from "../stores/packageStore";

const MAILGUN_APIKEY = process.env.REACT_APP_MAILGUN_APIKEY
const MAILGUN_DOMAIN = process.env.REACT_APP_MAILGUN_DOMAIN

const mailgun = require("mailgun-js")({
    apiKey: MAILGUN_APIKEY,
    domain: MAILGUN_DOMAIN,
    host: "api.eu.mailgun.net",
});

export function mailConfirmation(subscription) {

    const box = packageStore.getPackageByValue(subscription.package);

    let now = new Date();
    let timestamp = now.getDate()  + "-" + (now.getMonth()+1) + "-" + now.getFullYear() + " " +
        now.getHours() + ":" + now.getMinutes();

    const data = {
        from: 'WWW <www@williewinterweekend.nl>',
        to: subscription.email,
        subject: 'Thanks voor de box!',
        template: 'confirmation',
        'v:box': box.label,
        'v:total': subscription.total,
        'v:name': subscription.name,
        'v:timestamp': timestamp,
        'v:box_price': box.costs,
        'v:donation': subscription.donation
    };

    mailgun.messages().send(data);
}
