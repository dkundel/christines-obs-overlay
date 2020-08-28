const got = require('got');

exports.handler = async function (context, event, callback) {
  const apiUrl = context.API_URL;
  const responsePayload = await got(apiUrl).json();

  const response = new Twilio.Response();
  response.setBody(responsePayload);
  response.appendHeader('Content-Type', 'application/json');
  response.appendHeader('Access-Control-Allow-Origin', '*');
  response.appendHeader('Access-Control-Allow-Methods', 'GET');
  response.appendHeader('Access-Control-Allow-Headers', 'Content-Type');
  callback(null, response);
};
