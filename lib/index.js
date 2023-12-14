const Token = require("./features/Token");
const Agreement = require("./features/Agreement");
const Payment = require("./features/Payment");


const Bkash = {
    Token,
    Agreement,
    Payment
}
module.exports = Bkash;
// setTimeout(()=>{
//     Agreement.createAgreement()
// }, 5000);

// setTimeout(()=>{
//     Agreement.excuteAgreement()
// }, 60 * 1000);
// setTimeout(()=>{
//     Payment.createPayment();
// },80 * 1000)