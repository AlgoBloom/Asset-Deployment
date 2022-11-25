const algosdk = require("algosdk");
const { Account } = require("algosdk/dist/types/src/client/v2/algod/models/types");
const { default: LookupAccountByID } = require("algosdk/dist/types/src/client/v2/indexer/lookupAccountByID");

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

const getCreatedAsset = async (account, assetId) => {
    let accountInfo = await algodClient.accountInformation(account.addr).do();
    const asset = accountInfo["created-assets"].find((asset) => {
        return asset["index"] == assetId;
    });
};

const createFT = async () => {
    const from = creator.addr;
    const defaultFrozen = false;
    const unitName = "CM1";
    const asssetName = "Community 1 Token";
    const assetURL = undefined;
    const manager = creator.addr;
    const reserve = undefined;
    const clawback = creator.addr;
    const total = 100;
    const decimals = 0;

    const suggestedParams = await algodClient.getTransactionParams().do();

    const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
        from,
        total,
        decimals,
        assetName,
        unitName,
        assetURL,
        defaultFrozen,
        suggestedParams,
        freeze,
        manager,
        clawback,
        reserve,
    });

    const signTxn = txn.signTxn(creator.sk);
    const confirmedTxn = await submitToNetwork(signTxn);
    return confirmedTxn("asset-index");
};

const createBoardNFT1 = async () => {
    const from = creator.addr;
    const defaultFrozen = false;
    const unitName = "CL";
    const asssetName = "Community Leader NFT";
    const assetURL = undefined;
    const manager = creator.addr;
    const reserve = undefined;
    const clawback = creator.addr;
    const total = 1;
    const decimals = 0;

    const suggestedParams = await algodClient.getTransactionParams().do();

    const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
        from,
        total,
        decimals,
        assetName,
        unitName,
        assetURL,
        defaultFrozen,
        suggestedParams,
        freeze,
        manager,
        clawback,
        reserve,
    });

    const signTxn = txn.signTxn(creator.sk);
    const confirmedTxn = await submitToNetwork(signTxn);
    return confirmedTxn("asset-index");
};

const createBoardNFT2 = async () => {
    const from = creator.addr;
    const defaultFrozen = false;
    const unitName = "AM";
    const asssetName = "Authentium Member NFT";
    const assetURL = undefined;
    const manager = creator.addr;
    const reserve = undefined;
    const clawback = creator.addr;
    const total = 1;
    const decimals = 0;

    const suggestedParams = await algodClient.getTransactionParams().do();

    const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
        from,
        total,
        decimals,
        assetName,
        unitName,
        assetURL,
        defaultFrozen,
        suggestedParams,
        freeze,
        manager,
        clawback,
        reserve,
    });

    const signTxn = txn.signTxn(creator.sk);
    const confirmedTxn = await submitToNetwork(signTxn);
    return confirmedTxn("asset-index");
};

const createBoardNFT3 = async () => {
    const from = creator.addr;
    const defaultFrozen = false;
    const unitName = "TR";
    const asssetName = "Treasurer NFT";
    const assetURL = undefined;
    const manager = creator.addr;
    const reserve = undefined;
    const clawback = creator.addr;
    const total = 1;
    const decimals = 0;

    const suggestedParams = await algodClient.getTransactionParams().do();

    const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
        from,
        total,
        decimals,
        assetName,
        unitName,
        assetURL,
        defaultFrozen,
        suggestedParams,
        freeze,
        manager,
        clawback,
        reserve,
    });

    const signTxn = txn.signTxn(creator.sk);
    const confirmedTxn = await submitToNetwork(signTxn);
    return confirmedTxn("asset-index");
};

const createBoardNFT4 = async () => {
    const from = creator.addr;
    const defaultFrozen = false;
    const unitName = "FE";
    const asssetName = "Farming Expert NFT";
    const assetURL = undefined;
    const manager = creator.addr;
    const reserve = undefined;
    const clawback = creator.addr;
    const total = 1;
    const decimals = 0;

    const suggestedParams = await algodClient.getTransactionParams().do();

    const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
        from,
        total,
        decimals,
        assetName,
        unitName,
        assetURL,
        defaultFrozen,
        suggestedParams,
        freeze,
        manager,
        clawback,
        reserve,
    });

    const signTxn = txn.signTxn(creator.sk);
    const confirmedTxn = await submitToNetwork(signTxn);
    return confirmedTxn("asset-index");
};

const createBoardNFT5 = async () => {
    const from = creator.addr;
    const defaultFrozen = false;
    const unitName = "AO";
    const asssetName = "Admin Officer NFT";
    const assetURL = undefined; 
    const manager = creator.addr;
    const reserve = undefined;
    const clawback = creator.addr;
    const total = 1;
    const decimals = 0;

    const suggestedParams = await algodClient.getTransactionParams().do();

    const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
        from,
        total,
        decimals,
        assetName,
        unitName,
        assetURL,
        defaultFrozen,
        suggestedParams,
        freeze,
        manager,
        clawback,
        reserve,
    });

    const signTxn = txn.signTxn(creator.sk);
    const confirmedTxn = await submitToNetwork(signTxn);
    return confirmedTxn("asset-index");
};

(async () => {
    // create the fungible token
    console.log("Creating fungible community token...");
    const assetId1 = await createBoardNFT1().catch(console.error);
    let asset1 = await getCreatedAsset(creator, assetId1);

})();