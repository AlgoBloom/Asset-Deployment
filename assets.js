const algosdk = require("algosdk");

const algodClient = new algosdk.Algodv2(process.env.ALGOD_TOKEN, process.env.ALGOD_SERVER, process.env.ALGOD_PORT);

const creator = algosdk.mnemonicToSecretKey(process.env.MNEMONIC_CREATOR);
const receiver = algosdk.mnemonicToSecretKey(process.env.MNEMONIC_RECEIVER);

const submitToNetwork = async (signedTxn) => {
    let txn = await algodClient.sendRawTransaction(signedTxn).do();
    console.log("Transaction :" + txn.txId);
    confirmedTxn = await algosdk.waitForConfirmation(algodClient, txn.txId, 4);
}