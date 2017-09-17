exports.getDarksky = (payload) => {
  return new Promise((resolve, reject) => {
    const AWS = require('aws-sdk');

    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: 'us-east-1'
    });

    const lambda = new AWS.Lambda({ apiVersion: '2015-03-31', region: 'us-east-1' });

    const parameters = {
      FunctionName: 'getDarkSky',
      Payload: JSON.stringify(payload)
    };

    lambda.invoke(parameters, (err, data) => {
      if (err) { reject(err); }
      else {
        resolve(data);
      }
    });
  });
};
