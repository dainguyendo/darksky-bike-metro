/**
@function {getDarkSky}
@summary This is the lambda function to hosted in AWS
        and upon to gather Dark Sky data, environment variables should also contain
        the Dark Sky API key
@param {Object} event - should be a stringified object with properties of
                        latitude
                        longitude
                        date - UNIX time in SECONDS
*/

const https = require('https');

exports.handler = (event, context, callback) => {
    console.log('EVENT', event);
    const baseURL = `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/`;
    const requestURL = baseURL + `${event.latitude},${event.longitude},${event.date}`;

    https.get(requestURL, (resp) => {
        let data = '';
        resp.setEncoding('utf8');

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => { data += chunk; });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            const result = JSON.parse(data);
            callback(null, result);
        });

    }).on('error', (err) => {
        console.log('Error: ' + err.message);
        callback(err);
    });
};
