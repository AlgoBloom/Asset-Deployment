const algosdk = require("algosdk");

const algodClient = new algosdk.Algodv2(process.env.ALGOD_TOKEN, process.env.ALGOD_SERVER, process.env.ALGOD_PORT);

const creator = algosdk.mnemonicToSecretKey(process.env.MNEMONIC_CREATOR);
const receiver = algosdk.mnemonicToSecretKey(process.env.MNEMONIC_RECEIVER);

const submitToNetwork = async (signedTxn) => {
    let txn = await algodClient.sendRawTransaction(signedTxn).do();
    console.log("Transaction :" + txn.txId);
    confirmedTxn = await algosdk.waitForConfirmation(algodClient, txn.txId, 4);
    console.log("Transaction " + txn.txId + " confirmed in round " + confirmedTxn["confirmed-round"]);
    return confirmedTxn;
};

const createFT = async () => {
    const from = creator.addr;
    const defaultFrozen = false;
    const unitName = "CM1";
    const asssetName = "Community 1 Token";
    const assetURL = undefined;
    const manager = creator.addr;
    const reserve = undefined;
};