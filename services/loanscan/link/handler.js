'use strict';

module.exports.handler = async event => {
  const earnings = { success: true };
  return {
    statusCode: 200,
    body: JSON.stringify(earnings),
  };
};
