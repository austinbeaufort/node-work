const { ACCOUNT_SID, AUTH_TOKEN } = require('./config');

const accountSid = ACCOUNT_SID;
const authToken = AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

for (let i = 0; i < 10; i++) {
    client.messages
    .create({
        body: `${i}. This is text ${i}, not ${i + 1}, but ${i}`,
        from: '+12163500245',
        to: '+15708788859'
    })
    .then(message => console.log(message.sid));
}
