import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    Meteor.Mailgun.config({
        username: 'YOUR_MAILGUN_USERNAME',
        password: 'YOUR_MAILGUN_PASSWORD'
    });
});


// https://github.com/cunneen/meteor-mailgun
Meteor.methods({
    sendEmail: function (mailFields) {
        console.log("about to send email...");
        check([mailFields.to, mailFields.from, mailFields.subject, mailFields.text, mailFields.html], [String]);

        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();

        Meteor.Mailgun.send({
            to: mailFields.to,
            from: mailFields.from,
            subject: mailFields.subject,
            text: mailFields.text,
            html: mailFields.html
        });
        console.log("email sent!");
    }
});
