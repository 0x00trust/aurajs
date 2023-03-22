# aurajs

Typescript libraries for the Aura ecosystem. This repository was generated by Telescope, is a TypeScript Transpiler for Cosmos Protobufs. This tool is used to generate libraries for Cosmos blockchains. Simply, you can import aurajs to interact with Aura node.

## Install

We built this repository into package and published to GitHub Packages registry. In order to install aurajs, you must create `.npmrc` file. It store owner dependency information. Then, your project so that all requests to install packages will go through GitHub Packages. When you route all package requests through GitHub Packages, you can use both scoped and unscoped packages from npmjs.org.

```example
@0x00trust:registry=https://npm.pkg.github.com/0x00trust
```

## Usage

The most important of aurajs now is encode message for feegrant module. In this example, we will guide an example process: The granter broadcast a transaction include feegrant information (granter address, amount, contract address). When tx successful, the grantee will use fee to call contract address. 

Beside, we will use CosmJs version larger than 0.29.4. The aurajs lib simply used to encode `AllowedContractAllowance` msg, granter fee to grantee to call smart contract. To broadcast it, we use Cosmjs. Other, from version 0.29.4 you can sign tx include granter information, who has granted to grantee. 

### Grant fee

`AllowedContractAllowance` include allowance parameter, it can be `BasicAllowance` or `PeriodicAllowance`. Simply, BasicAllowance implements Allowance with a one-time grant of tokens that optionally expires. The grantee can use up to SpendLimit to cover fees. PeriodicAllowance extends Allowance to allow for both a maximum cap, as well as a limit per time period. For more information, you can read docs of [Cosmjs]().

```ts
            import { AllowedContractAllowance } from '@0x00trust/aurajs/main/codegen/aura/feegrant/v1beta1/feegrant';
            import { BasicAllowance } from "cosmjs-types/cosmos/feegrant/v1beta1/feegrant";

            const client = await SigningStargateClient.connectWithSigner(
                this.tendermintURL,
                wallet, // The granter will grant fee
                {
                    gasPrice: this.defaultGasPrice
                }
            );

            const basicAllowance: Any = {
                typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
                value: Uint8Array.from(
                    BasicAllowance.encode({
                        spendLimit: [
                          {
                            denom: "uaura",
                            amount: "1234567",
                          },
                        ],
                      }).finish(),
                ),
              };

            const allowance: Any = {
                typeUrl: "/cosmos.feegrant.v1beta1.AllowedContractAllowance",
                value: Uint8Array.from(
                    AllowedContractAllowance.encode({
                        allowedAddress: ["contract string array"],
                        allowance: basicAllowance
                    }).finish(),
                ),
            };
            const grantMsg = {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: MsgGrantAllowance.fromPartial({
                    granter: granterAddress, 
                    grantee: granteeAddress,
                    allowance: allowance,
                }),
            };

            await client.signAndBroadcast(granter[0].address, [grantMsg], "auto", "Create allowance");
```

When tx return success result, you can use fee to call to `allowedAddress`.

### Instantiate contract example use fee has granted
From version 0.29.4, `makeAuthInfoBytes` function has 2 more parameters: feeGranter, feePayer. If you want granter pay fee for tx, just input here.

Just define your custum StdFee and broadcast tx. Example:

```ts
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(alice.mnemonic, { prefix: wasmd.prefix });
    const client = await CosmWasmClient.connect(this.tendermintURL);
      const registry = new Registry();

      const memo = "My first contract on chain";
      const sendMsg: MsgSendEncodeObject = {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: {
          fromAddress: alice.address0,
          toAddress: makeRandomAddress(),
          amount: coins(1234567, "uaura"),
        },
      };
      const fee: StdFee = {
        amount: coins(5000, "uaura"),
        gas: "890000",
      };

      const chainId = await client.getChainId();
      const sequenceResponse = await client.getSequence(alice.address0);
      assert(sequenceResponse);
      const { accountNumber, sequence } = sequenceResponse;
      const pubkey = encodePubkey(alice.pubkey0);
      const txBody: TxBodyEncodeObject = {
        typeUrl: "/cosmos.tx.v1beta1.TxBody",
        value: {
          messages: [sendMsg],
          memo: memo,
        },
      };
      const txBodyBytes = registry.encode(txBody);
      const gasLimit = Int53.fromString(fee.gas).toNumber();
      const feePayer = undefined;
      const authInfoBytes = makeAuthInfoBytes(
        [{ pubkey, sequence }],
        fee.amount,
        gasLimit,
        granterAddress,
        feePayer,
      );
      const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, chainId, accountNumber);
      const { signed, signature } = await wallet.signDirect(alice.address0, signDoc);
      const txRaw = TxRaw.fromPartial({
        bodyBytes: signed.bodyBytes,
        authInfoBytes: signed.authInfoBytes,
        signatures: [fromBase64(signature.signature)],
      });
      const signedTx = Uint8Array.from(TxRaw.encode(txRaw).finish());
      const result = await client.broadcastTx(signedTx);
      assertIsDeliverTxSuccess(result);
```

## Developing

Checkout the repository and bootstrap the yarn workspace:

```sh
# Clone the repo.
git clone https://github.com/cosmology-tech/stargazejs
yarn
yarn bootstrap
```

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code or software using the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.

[def]: https://cosmos.github.io/cosmjs/
