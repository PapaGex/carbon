import React from 'react';
import {makeAssetCreateTxnWithSuggestedParams} from "algosdk";

import CCFTsubmition from "./CCTokenForm";

let params = await algodclient.getTransactionParams().do();
params.fee = 1000;
params.flatFee = true;
let note = CCFTsubmition;
let addr = `${CCFTsubmition.address}`;
let defaultFrozen = false;
let decimals = 4;
let totalIssuance = `${CCFTsubmition.issuance}`;
