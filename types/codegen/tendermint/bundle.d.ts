import * as _83 from "./abci/types";
import * as _84 from "./crypto/keys";
import * as _85 from "./crypto/proof";
import * as _86 from "./libs/bits/types";
import * as _87 from "./p2p/types";
import * as _88 from "./types/block";
import * as _89 from "./types/evidence";
import * as _90 from "./types/params";
import * as _91 from "./types/types";
import * as _92 from "./types/validator";
import * as _93 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _83.CheckTxType;
        checkTxTypeToJSON(object: _83.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _83.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _83.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _83.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _83.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _83.EvidenceType;
        evidenceTypeToJSON(object: _83.EvidenceType): string;
        CheckTxType: typeof _83.CheckTxType;
        CheckTxTypeSDKType: typeof _83.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _83.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _83.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _83.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _83.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _83.EvidenceType;
        EvidenceTypeSDKType: typeof _83.EvidenceType;
        Request: {
            encode(message: _83.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Request;
            fromPartial(object: {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    blockVersion?: string | number | import("long");
                    p2pVersion?: string | number | import("long");
                };
                setOption?: {
                    key?: string;
                    value?: string;
                };
                initChain?: {
                    time?: Date;
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: string | number | import("long");
                            maxGas?: string | number | import("long");
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long");
                            maxAgeDuration?: {
                                seconds?: string | number | import("long");
                                nanos?: number;
                            };
                            maxBytes?: string | number | import("long");
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string | number | import("long");
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long");
                    }[];
                    appStateBytes?: Uint8Array;
                    initialHeight?: string | number | import("long");
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: string | number | import("long");
                    prove?: boolean;
                };
                beginBlock?: {
                    hash?: Uint8Array;
                    header?: {
                        version?: {
                            block?: string | number | import("long");
                            app?: string | number | import("long");
                        };
                        chainId?: string;
                        height?: string | number | import("long");
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: string | number | import("long");
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    byzantineValidators?: {
                        type?: _83.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: string | number | import("long");
                        };
                        height?: string | number | import("long");
                        time?: Date;
                        totalVotingPower?: string | number | import("long");
                    }[];
                };
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _83.CheckTxType;
                };
                deliverTx?: {
                    tx?: Uint8Array;
                };
                endBlock?: {
                    height?: string | number | import("long");
                };
                commit?: {};
                listSnapshots?: {};
                offerSnapshot?: {
                    snapshot?: {
                        height?: string | number | import("long");
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    appHash?: Uint8Array;
                };
                loadSnapshotChunk?: {
                    height?: string | number | import("long");
                    format?: number;
                    chunk?: number;
                };
                applySnapshotChunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
            }): _83.Request;
        };
        RequestEcho: {
            encode(message: _83.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestEcho;
            fromPartial(object: {
                message?: string;
            }): _83.RequestEcho;
        };
        RequestFlush: {
            encode(_: _83.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestFlush;
            fromPartial(_: {}): _83.RequestFlush;
        };
        RequestInfo: {
            encode(message: _83.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestInfo;
            fromPartial(object: {
                version?: string;
                blockVersion?: string | number | import("long");
                p2pVersion?: string | number | import("long");
            }): _83.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _83.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestSetOption;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _83.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _83.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestInitChain;
            fromPartial(object: {
                time?: Date;
                chainId?: string;
                consensusParams?: {
                    block?: {
                        maxBytes?: string | number | import("long");
                        maxGas?: string | number | import("long");
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long");
                        maxAgeDuration?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        maxBytes?: string | number | import("long");
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string | number | import("long");
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long");
                }[];
                appStateBytes?: Uint8Array;
                initialHeight?: string | number | import("long");
            }): _83.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _83.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestQuery;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: string | number | import("long");
                prove?: boolean;
            }): _83.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _83.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestBeginBlock;
            fromPartial(object: {
                hash?: Uint8Array;
                header?: {
                    version?: {
                        block?: string | number | import("long");
                        app?: string | number | import("long");
                    };
                    chainId?: string;
                    height?: string | number | import("long");
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                lastCommitInfo?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: string | number | import("long");
                        };
                        signedLastBlock?: boolean;
                    }[];
                };
                byzantineValidators?: {
                    type?: _83.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long");
                    };
                    height?: string | number | import("long");
                    time?: Date;
                    totalVotingPower?: string | number | import("long");
                }[];
            }): _83.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _83.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestCheckTx;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _83.CheckTxType;
            }): _83.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _83.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestDeliverTx;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _83.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _83.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestEndBlock;
            fromPartial(object: {
                height?: string | number | import("long");
            }): _83.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _83.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestCommit;
            fromPartial(_: {}): _83.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _83.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestListSnapshots;
            fromPartial(_: {}): _83.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _83.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestOfferSnapshot;
            fromPartial(object: {
                snapshot?: {
                    height?: string | number | import("long");
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            }): _83.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _83.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestLoadSnapshotChunk;
            fromPartial(object: {
                height?: string | number | import("long");
                format?: number;
                chunk?: number;
            }): _83.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _83.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestApplySnapshotChunk;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _83.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _83.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Response;
            fromPartial(object: {
                exception?: {
                    error?: string;
                };
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    data?: string;
                    version?: string;
                    appVersion?: string | number | import("long");
                    lastBlockHeight?: string | number | import("long");
                    lastBlockAppHash?: Uint8Array;
                };
                setOption?: {
                    code?: number;
                    log?: string;
                    info?: string;
                };
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes?: string | number | import("long");
                            maxGas?: string | number | import("long");
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long");
                            maxAgeDuration?: {
                                seconds?: string | number | import("long");
                                nanos?: number;
                            };
                            maxBytes?: string | number | import("long");
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string | number | import("long");
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long");
                    }[];
                    appHash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: string | number | import("long");
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: string | number | import("long");
                    codespace?: string;
                };
                beginBlock?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                checkTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string | number | import("long");
                    gasUsed?: string | number | import("long");
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                    sender?: string;
                    priority?: string | number | import("long");
                    mempoolError?: string;
                };
                deliverTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string | number | import("long");
                    gasUsed?: string | number | import("long");
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                endBlock?: {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long");
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: string | number | import("long");
                            maxGas?: string | number | import("long");
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long");
                            maxAgeDuration?: {
                                seconds?: string | number | import("long");
                                nanos?: number;
                            };
                            maxBytes?: string | number | import("long");
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string | number | import("long");
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                commit?: {
                    data?: Uint8Array;
                    retainHeight?: string | number | import("long");
                };
                listSnapshots?: {
                    snapshots?: {
                        height?: string | number | import("long");
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offerSnapshot?: {
                    result?: _83.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _83.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
            }): _83.Response;
        };
        ResponseException: {
            encode(message: _83.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseException;
            fromPartial(object: {
                error?: string;
            }): _83.ResponseException;
        };
        ResponseEcho: {
            encode(message: _83.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseEcho;
            fromPartial(object: {
                message?: string;
            }): _83.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _83.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseFlush;
            fromPartial(_: {}): _83.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _83.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseInfo;
            fromPartial(object: {
                data?: string;
                version?: string;
                appVersion?: string | number | import("long");
                lastBlockHeight?: string | number | import("long");
                lastBlockAppHash?: Uint8Array;
            }): _83.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _83.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseSetOption;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
            }): _83.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _83.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseInitChain;
            fromPartial(object: {
                consensusParams?: {
                    block?: {
                        maxBytes?: string | number | import("long");
                        maxGas?: string | number | import("long");
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long");
                        maxAgeDuration?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        maxBytes?: string | number | import("long");
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string | number | import("long");
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long");
                }[];
                appHash?: Uint8Array;
            }): _83.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _83.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseQuery;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
                index?: string | number | import("long");
                key?: Uint8Array;
                value?: Uint8Array;
                proofOps?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: string | number | import("long");
                codespace?: string;
            }): _83.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _83.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseBeginBlock;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _83.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _83.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseCheckTx;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: string | number | import("long");
                gasUsed?: string | number | import("long");
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
                sender?: string;
                priority?: string | number | import("long");
                mempoolError?: string;
            }): _83.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _83.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseDeliverTx;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: string | number | import("long");
                gasUsed?: string | number | import("long");
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _83.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _83.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseEndBlock;
            fromPartial(object: {
                validatorUpdates?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long");
                }[];
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: string | number | import("long");
                        maxGas?: string | number | import("long");
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long");
                        maxAgeDuration?: {
                            seconds?: string | number | import("long");
                            nanos?: number;
                        };
                        maxBytes?: string | number | import("long");
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string | number | import("long");
                    };
                };
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _83.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _83.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseCommit;
            fromPartial(object: {
                data?: Uint8Array;
                retainHeight?: string | number | import("long");
            }): _83.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _83.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseListSnapshots;
            fromPartial(object: {
                snapshots?: {
                    height?: string | number | import("long");
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _83.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _83.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseOfferSnapshot;
            fromPartial(object: {
                result?: _83.ResponseOfferSnapshot_Result;
            }): _83.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _83.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseLoadSnapshotChunk;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _83.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _83.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseApplySnapshotChunk;
            fromPartial(object: {
                result?: _83.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            }): _83.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _83.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ConsensusParams;
            fromPartial(object: {
                block?: {
                    maxBytes?: string | number | import("long");
                    maxGas?: string | number | import("long");
                };
                evidence?: {
                    maxAgeNumBlocks?: string | number | import("long");
                    maxAgeDuration?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                    maxBytes?: string | number | import("long");
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: string | number | import("long");
                };
            }): _83.ConsensusParams;
        };
        BlockParams: {
            encode(message: _83.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.BlockParams;
            fromPartial(object: {
                maxBytes?: string | number | import("long");
                maxGas?: string | number | import("long");
            }): _83.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _83.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.LastCommitInfo;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long");
                    };
                    signedLastBlock?: boolean;
                }[];
            }): _83.LastCommitInfo;
        };
        Event: {
            encode(message: _83.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Event;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }): _83.Event;
        };
        EventAttribute: {
            encode(message: _83.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.EventAttribute;
            fromPartial(object: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }): _83.EventAttribute;
        };
        TxResult: {
            encode(message: _83.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.TxResult;
            fromPartial(object: {
                height?: string | number | import("long");
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string | number | import("long");
                    gasUsed?: string | number | import("long");
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
            }): _83.TxResult;
        };
        Validator: {
            encode(message: _83.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                power?: string | number | import("long");
            }): _83.Validator;
        };
        ValidatorUpdate: {
            encode(message: _83.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ValidatorUpdate;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: string | number | import("long");
            }): _83.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _83.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.VoteInfo;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long");
                };
                signedLastBlock?: boolean;
            }): _83.VoteInfo;
        };
        Evidence: {
            encode(message: _83.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Evidence;
            fromPartial(object: {
                type?: _83.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long");
                };
                height?: string | number | import("long");
                time?: Date;
                totalVotingPower?: string | number | import("long");
            }): _83.Evidence;
        };
        Snapshot: {
            encode(message: _83.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Snapshot;
            fromPartial(object: {
                height?: string | number | import("long");
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _83.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _85.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Proof;
            fromPartial(object: {
                total?: string | number | import("long");
                index?: string | number | import("long");
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _85.Proof;
        };
        ValueOp: {
            encode(message: _85.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ValueOp;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: string | number | import("long");
                    index?: string | number | import("long");
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _85.ValueOp;
        };
        DominoOp: {
            encode(message: _85.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DominoOp;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _85.DominoOp;
        };
        ProofOp: {
            encode(message: _85.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ProofOp;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _85.ProofOp;
        };
        ProofOps: {
            encode(message: _85.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ProofOps;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _85.ProofOps;
        };
        PublicKey: {
            encode(message: _84.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.PublicKey;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _84.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _86.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.BitArray;
                fromPartial(object: {
                    bits?: string | number | import("long");
                    elems?: (string | number | import("long"))[];
                }): _86.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _87.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.NetAddress;
            fromPartial(object: {
                id?: string;
                ip?: string;
                port?: number;
            }): _87.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _87.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ProtocolVersion;
            fromPartial(object: {
                p2p?: string | number | import("long");
                block?: string | number | import("long");
                app?: string | number | import("long");
            }): _87.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _87.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.DefaultNodeInfo;
            fromPartial(object: {
                protocolVersion?: {
                    p2p?: string | number | import("long");
                    block?: string | number | import("long");
                    app?: string | number | import("long");
                };
                defaultNodeId?: string;
                listenAddr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    txIndex?: string;
                    rpcAddress?: string;
                };
            }): _87.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _87.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.DefaultNodeInfoOther;
            fromPartial(object: {
                txIndex?: string;
                rpcAddress?: string;
            }): _87.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _92.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ValidatorSet;
            fromPartial(object: {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string | number | import("long");
                    proposerPriority?: string | number | import("long");
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string | number | import("long");
                    proposerPriority?: string | number | import("long");
                };
                totalVotingPower?: string | number | import("long");
            }): _92.ValidatorSet;
        };
        Validator: {
            encode(message: _92.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string | number | import("long");
                proposerPriority?: string | number | import("long");
            }): _92.Validator;
        };
        SimpleValidator: {
            encode(message: _92.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.SimpleValidator;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string | number | import("long");
            }): _92.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _91.BlockIDFlag;
        blockIDFlagToJSON(object: _91.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _91.SignedMsgType;
        signedMsgTypeToJSON(object: _91.SignedMsgType): string;
        BlockIDFlag: typeof _91.BlockIDFlag;
        BlockIDFlagSDKType: typeof _91.BlockIDFlag;
        SignedMsgType: typeof _91.SignedMsgType;
        SignedMsgTypeSDKType: typeof _91.SignedMsgType;
        PartSetHeader: {
            encode(message: _91.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.PartSetHeader;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _91.PartSetHeader;
        };
        Part: {
            encode(message: _91.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Part;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: string | number | import("long");
                    index?: string | number | import("long");
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _91.Part;
        };
        BlockID: {
            encode(message: _91.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.BlockID;
            fromPartial(object: {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _91.BlockID;
        };
        Header: {
            encode(message: _91.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Header;
            fromPartial(object: {
                version?: {
                    block?: string | number | import("long");
                    app?: string | number | import("long");
                };
                chainId?: string;
                height?: string | number | import("long");
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            }): _91.Header;
        };
        Data: {
            encode(message: _91.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Data;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _91.Data;
        };
        Vote: {
            encode(message: _91.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Vote;
            fromPartial(object: {
                type?: _91.SignedMsgType;
                height?: string | number | import("long");
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                validatorAddress?: Uint8Array;
                validatorIndex?: number;
                signature?: Uint8Array;
            }): _91.Vote;
        };
        Commit: {
            encode(message: _91.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Commit;
            fromPartial(object: {
                height?: string | number | import("long");
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                signatures?: {
                    blockIdFlag?: _91.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            }): _91.Commit;
        };
        CommitSig: {
            encode(message: _91.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.CommitSig;
            fromPartial(object: {
                blockIdFlag?: _91.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }): _91.CommitSig;
        };
        Proposal: {
            encode(message: _91.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Proposal;
            fromPartial(object: {
                type?: _91.SignedMsgType;
                height?: string | number | import("long");
                round?: number;
                polRound?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                signature?: Uint8Array;
            }): _91.Proposal;
        };
        SignedHeader: {
            encode(message: _91.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.SignedHeader;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: string | number | import("long");
                        app?: string | number | import("long");
                    };
                    chainId?: string;
                    height?: string | number | import("long");
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                commit?: {
                    height?: string | number | import("long");
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _91.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _91.SignedHeader;
        };
        LightBlock: {
            encode(message: _91.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.LightBlock;
            fromPartial(object: {
                signedHeader?: {
                    header?: {
                        version?: {
                            block?: string | number | import("long");
                            app?: string | number | import("long");
                        };
                        chainId?: string;
                        height?: string | number | import("long");
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    commit?: {
                        height?: string | number | import("long");
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        signatures?: {
                            blockIdFlag?: _91.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[];
                    };
                };
                validatorSet?: {
                    validators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string | number | import("long");
                        proposerPriority?: string | number | import("long");
                    }[];
                    proposer?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string | number | import("long");
                        proposerPriority?: string | number | import("long");
                    };
                    totalVotingPower?: string | number | import("long");
                };
            }): _91.LightBlock;
        };
        BlockMeta: {
            encode(message: _91.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.BlockMeta;
            fromPartial(object: {
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                blockSize?: string | number | import("long");
                header?: {
                    version?: {
                        block?: string | number | import("long");
                        app?: string | number | import("long");
                    };
                    chainId?: string;
                    height?: string | number | import("long");
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                numTxs?: string | number | import("long");
            }): _91.BlockMeta;
        };
        TxProof: {
            encode(message: _91.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.TxProof;
            fromPartial(object: {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: string | number | import("long");
                    index?: string | number | import("long");
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _91.TxProof;
        };
        ConsensusParams: {
            encode(message: _90.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ConsensusParams;
            fromPartial(object: {
                block?: {
                    maxBytes?: string | number | import("long");
                    maxGas?: string | number | import("long");
                    timeIotaMs?: string | number | import("long");
                };
                evidence?: {
                    maxAgeNumBlocks?: string | number | import("long");
                    maxAgeDuration?: {
                        seconds?: string | number | import("long");
                        nanos?: number;
                    };
                    maxBytes?: string | number | import("long");
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: string | number | import("long");
                };
            }): _90.ConsensusParams;
        };
        BlockParams: {
            encode(message: _90.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.BlockParams;
            fromPartial(object: {
                maxBytes?: string | number | import("long");
                maxGas?: string | number | import("long");
                timeIotaMs?: string | number | import("long");
            }): _90.BlockParams;
        };
        EvidenceParams: {
            encode(message: _90.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.EvidenceParams;
            fromPartial(object: {
                maxAgeNumBlocks?: string | number | import("long");
                maxAgeDuration?: {
                    seconds?: string | number | import("long");
                    nanos?: number;
                };
                maxBytes?: string | number | import("long");
            }): _90.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _90.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ValidatorParams;
            fromPartial(object: {
                pubKeyTypes?: string[];
            }): _90.ValidatorParams;
        };
        VersionParams: {
            encode(message: _90.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.VersionParams;
            fromPartial(object: {
                appVersion?: string | number | import("long");
            }): _90.VersionParams;
        };
        HashedParams: {
            encode(message: _90.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.HashedParams;
            fromPartial(object: {
                blockMaxBytes?: string | number | import("long");
                blockMaxGas?: string | number | import("long");
            }): _90.HashedParams;
        };
        Evidence: {
            encode(message: _89.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Evidence;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _91.SignedMsgType;
                        height?: string | number | import("long");
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    voteB?: {
                        type?: _91.SignedMsgType;
                        height?: string | number | import("long");
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    totalVotingPower?: string | number | import("long");
                    validatorPower?: string | number | import("long");
                    timestamp?: Date;
                };
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long");
                                    app?: string | number | import("long");
                                };
                                chainId?: string;
                                height?: string | number | import("long");
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: string | number | import("long");
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _91.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long");
                                proposerPriority?: string | number | import("long");
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long");
                                proposerPriority?: string | number | import("long");
                            };
                            totalVotingPower?: string | number | import("long");
                        };
                    };
                    commonHeight?: string | number | import("long");
                    byzantineValidators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string | number | import("long");
                        proposerPriority?: string | number | import("long");
                    }[];
                    totalVotingPower?: string | number | import("long");
                    timestamp?: Date;
                };
            }): _89.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _89.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.DuplicateVoteEvidence;
            fromPartial(object: {
                voteA?: {
                    type?: _91.SignedMsgType;
                    height?: string | number | import("long");
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                voteB?: {
                    type?: _91.SignedMsgType;
                    height?: string | number | import("long");
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                totalVotingPower?: string | number | import("long");
                validatorPower?: string | number | import("long");
                timestamp?: Date;
            }): _89.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _89.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.LightClientAttackEvidence;
            fromPartial(object: {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: string | number | import("long");
                                app?: string | number | import("long");
                            };
                            chainId?: string;
                            height?: string | number | import("long");
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        commit?: {
                            height?: string | number | import("long");
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: _91.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string | number | import("long");
                            proposerPriority?: string | number | import("long");
                        }[];
                        proposer?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string | number | import("long");
                            proposerPriority?: string | number | import("long");
                        };
                        totalVotingPower?: string | number | import("long");
                    };
                };
                commonHeight?: string | number | import("long");
                byzantineValidators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string | number | import("long");
                    proposerPriority?: string | number | import("long");
                }[];
                totalVotingPower?: string | number | import("long");
                timestamp?: Date;
            }): _89.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _89.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.EvidenceList;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _91.SignedMsgType;
                            height?: string | number | import("long");
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: _91.SignedMsgType;
                            height?: string | number | import("long");
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: string | number | import("long");
                        validatorPower?: string | number | import("long");
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | import("long");
                                        app?: string | number | import("long");
                                    };
                                    chainId?: string;
                                    height?: string | number | import("long");
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: string | number | import("long");
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _91.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long");
                                    proposerPriority?: string | number | import("long");
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long");
                                    proposerPriority?: string | number | import("long");
                                };
                                totalVotingPower?: string | number | import("long");
                            };
                        };
                        commonHeight?: string | number | import("long");
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string | number | import("long");
                            proposerPriority?: string | number | import("long");
                        }[];
                        totalVotingPower?: string | number | import("long");
                        timestamp?: Date;
                    };
                }[];
            }): _89.EvidenceList;
        };
        Block: {
            encode(message: _88.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Block;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: string | number | import("long");
                        app?: string | number | import("long");
                    };
                    chainId?: string;
                    height?: string | number | import("long");
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                data?: {
                    txs?: Uint8Array[];
                };
                evidence?: {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _91.SignedMsgType;
                                height?: string | number | import("long");
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            voteB?: {
                                type?: _91.SignedMsgType;
                                height?: string | number | import("long");
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            totalVotingPower?: string | number | import("long");
                            validatorPower?: string | number | import("long");
                            timestamp?: Date;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: string | number | import("long");
                                            app?: string | number | import("long");
                                        };
                                        chainId?: string;
                                        height?: string | number | import("long");
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: string | number | import("long");
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _91.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string | number | import("long");
                                        proposerPriority?: string | number | import("long");
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string | number | import("long");
                                        proposerPriority?: string | number | import("long");
                                    };
                                    totalVotingPower?: string | number | import("long");
                                };
                            };
                            commonHeight?: string | number | import("long");
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long");
                                proposerPriority?: string | number | import("long");
                            }[];
                            totalVotingPower?: string | number | import("long");
                            timestamp?: Date;
                        };
                    }[];
                };
                lastCommit?: {
                    height?: string | number | import("long");
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _91.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _88.Block;
        };
    };
    const version: {
        App: {
            encode(message: _93.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.App;
            fromPartial(object: {
                protocol?: string | number | import("long");
                software?: string;
            }): _93.App;
        };
        Consensus: {
            encode(message: _93.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Consensus;
            fromPartial(object: {
                block?: string | number | import("long");
                app?: string | number | import("long");
            }): _93.Consensus;
        };
    };
}
