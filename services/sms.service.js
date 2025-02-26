const axios = require('axios');
const { config } = require('../config');
const { smsPayload } = require('../helpers/utils');

module.exports = {
  send: async (mobileNumber, msg) => {
    await axios.post(config.SMS_HOST, smsPayload(mobileNumber, msg), {
      headers: {
        'x-api-key': config.SMS_API_KEY,
      },
    });
    return true;
  },
};
