const { default: axios } = require("axios");
const { Credentials, TOKEN, URL, AGREEMENT } = require("../data/data");

const Payment = {
    createPayment: async () => {
        const headers = {
            authorization: TOKEN.ID_TOKEN,
            "x-app-key": Credentials.app_key,
        }
        const data = {
            agreementID:AGREEMENT.AGREEMENT_ID,
            mode: "0001",
            payerReference: Credentials.payerReference,
            callbackURL: Credentials.callbackURL,
            merchantAssociationInfo: "MI05MID54RF09123456One",
            amount: "12",
            currency: "BDT",
            intent: "sale",
            merchantInvoiceNumber: "Inv0124"
        }
        axios.post(URL.CREATE_PAYMENT,data, {headers}).then(res=>{
            console.log(res.data);
        })
    },
    refundPayment: async () =>{
        const headers = {
            authorization: TOKEN.ID_TOKEN,
            "x-app-key": Credentials.app_key,
        }
        const data = {
            paymentId: AGREEMENT.PAYMENT_ID,
            amount: '12',
            trxID: '2313213',
            sku: 'aaaab',
            reason: 'no reason'
        }
        axios.post(URL.PAYMENT_REFUND,data, {headers}).then(res=>{
            console.log(res.data);
        })
    }
}

module.exports = Payment;