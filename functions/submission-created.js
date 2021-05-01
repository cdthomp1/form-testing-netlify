var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars')

const fs = require('fs');

fs.readdir('/emails', (err, files) => {
    files.forEach(file => {
        console.log(file);
    });
});

exports.handler = async function (event, context) {
    var formSub = JSON.parse(event.body);
    console.log(formSub.payload.name)
    var subscriber = {
        name: formSub.payload.name,
        email: formSub.payload.email
    }

    // sendWelcomeEmail(subscriber);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: `${formSub.payload.name}` })
    };
}
