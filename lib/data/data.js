// URL
require('dotenv').config();
const BASE_URL=  process.env.BASEURL;
const URL = {
  GRANT_TOKEN:`${BASE_URL}/token/grant`,
  REFRESH_TOKEN: `${BASE_URL}/token/refresh`,
  CREATE_AGREEMENT: `${BASE_URL}/create`,
  EXECUTE_AGREEMENT: `${BASE_URL}/execute`,
  CREATE_PAYMENT: `${BASE_URL}create`,
  PAYMENT_REFUND: `${BASE_URL}/payment/refund`,
};

// Credentials
const Credentials = {
  username: process.env.USER_NAME,
  password: process.env.PASS_WORD,
  app_key: process.env.APP_KEY,
  app_secret: process.env.APP_SECRET,
  callbackURL: process.env.CALLBACK_URL,
  payerReference: "01770618575",
};
const TOKEN = {
  ID_TOKEN:"",
  REFRESH_TOKEN:"",
}
const AGREEMENT ={
  PAYMENT_ID: '',
  AGREEMENT_ID: "",
}
module.exports = { URL, Credentials, TOKEN, AGREEMENT };
