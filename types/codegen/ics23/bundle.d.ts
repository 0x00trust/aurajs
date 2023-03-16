import * as _73 from "../proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _73.HashOp;
    hashOpToJSON(object: _73.HashOp): string;
    lengthOpFromJSON(object: any): _73.LengthOp;
    lengthOpToJSON(object: _73.LengthOp): string;
    HashOp: typeof _73.HashOp;
    HashOpSDKType: typeof _73.HashOp;
    LengthOp: typeof _73.LengthOp;
    LengthOpSDKType: typeof _73.LengthOp;
    ExistenceProof: {
        encode(message: _73.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _73.HashOp;
                prehashKey?: _73.HashOp;
                prehashValue?: _73.HashOp;
                length?: _73.LengthOp;
                prefix?: Uint8Array;
            };
            path?: {
                hash?: _73.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _73.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _73.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.NonExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _73.HashOp;
                    prehashKey?: _73.HashOp;
                    prehashValue?: _73.HashOp;
                    length?: _73.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _73.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _73.HashOp;
                    prehashKey?: _73.HashOp;
                    prehashValue?: _73.HashOp;
                    length?: _73.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _73.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _73.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _73.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.CommitmentProof;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _73.HashOp;
                    prehashKey?: _73.HashOp;
                    prehashValue?: _73.HashOp;
                    length?: _73.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _73.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _73.HashOp;
                        prehashKey?: _73.HashOp;
                        prehashValue?: _73.HashOp;
                        length?: _73.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _73.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _73.HashOp;
                        prehashKey?: _73.HashOp;
                        prehashValue?: _73.HashOp;
                        length?: _73.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _73.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _73.HashOp;
                            prehashKey?: _73.HashOp;
                            prehashValue?: _73.HashOp;
                            length?: _73.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _73.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _73.HashOp;
                                prehashKey?: _73.HashOp;
                                prehashValue?: _73.HashOp;
                                length?: _73.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _73.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _73.HashOp;
                                prehashKey?: _73.HashOp;
                                prehashValue?: _73.HashOp;
                                length?: _73.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _73.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                    };
                }[];
            };
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _73.HashOp;
                            prehashKey?: _73.HashOp;
                            prehashValue?: _73.HashOp;
                            length?: _73.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _73.HashOp;
                                prehashKey?: _73.HashOp;
                                prehashValue?: _73.HashOp;
                                length?: _73.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _73.HashOp;
                                prehashKey?: _73.HashOp;
                                prehashValue?: _73.HashOp;
                                length?: _73.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _73.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _73.CommitmentProof;
    };
    LeafOp: {
        encode(message: _73.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.LeafOp;
        fromPartial(object: {
            hash?: _73.HashOp;
            prehashKey?: _73.HashOp;
            prehashValue?: _73.HashOp;
            length?: _73.LengthOp;
            prefix?: Uint8Array;
        }): _73.LeafOp;
    };
    InnerOp: {
        encode(message: _73.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.InnerOp;
        fromPartial(object: {
            hash?: _73.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        }): _73.InnerOp;
    };
    ProofSpec: {
        encode(message: _73.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ProofSpec;
        fromPartial(object: {
            leafSpec?: {
                hash?: _73.HashOp;
                prehashKey?: _73.HashOp;
                prehashValue?: _73.HashOp;
                length?: _73.LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _73.HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        }): _73.ProofSpec;
    };
    InnerSpec: {
        encode(message: _73.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.InnerSpec;
        fromPartial(object: {
            childOrder?: number[];
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _73.HashOp;
        }): _73.InnerSpec;
    };
    BatchProof: {
        encode(message: _73.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.BatchProof;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _73.HashOp;
                        prehashKey?: _73.HashOp;
                        prehashValue?: _73.HashOp;
                        length?: _73.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _73.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _73.HashOp;
                            prehashKey?: _73.HashOp;
                            prehashValue?: _73.HashOp;
                            length?: _73.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _73.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _73.HashOp;
                            prehashKey?: _73.HashOp;
                            prehashValue?: _73.HashOp;
                            length?: _73.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _73.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                };
            }[];
        }): _73.BatchProof;
    };
    BatchEntry: {
        encode(message: _73.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.BatchEntry;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _73.HashOp;
                    prehashKey?: _73.HashOp;
                    prehashValue?: _73.HashOp;
                    length?: _73.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _73.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _73.HashOp;
                        prehashKey?: _73.HashOp;
                        prehashValue?: _73.HashOp;
                        length?: _73.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _73.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _73.HashOp;
                        prehashKey?: _73.HashOp;
                        prehashValue?: _73.HashOp;
                        length?: _73.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _73.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
        }): _73.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _73.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.CompressedBatchProof;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _73.HashOp;
                        prehashKey?: _73.HashOp;
                        prehashValue?: _73.HashOp;
                        length?: _73.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _73.HashOp;
                            prehashKey?: _73.HashOp;
                            prehashValue?: _73.HashOp;
                            length?: _73.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _73.HashOp;
                            prehashKey?: _73.HashOp;
                            prehashValue?: _73.HashOp;
                            length?: _73.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[];
            lookupInners?: {
                hash?: _73.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _73.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _73.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.CompressedBatchEntry;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _73.HashOp;
                    prehashKey?: _73.HashOp;
                    prehashValue?: _73.HashOp;
                    length?: _73.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _73.HashOp;
                        prehashKey?: _73.HashOp;
                        prehashValue?: _73.HashOp;
                        length?: _73.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _73.HashOp;
                        prehashKey?: _73.HashOp;
                        prehashValue?: _73.HashOp;
                        length?: _73.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
            };
        }): _73.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _73.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.CompressedExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _73.HashOp;
                prehashKey?: _73.HashOp;
                prehashValue?: _73.HashOp;
                length?: _73.LengthOp;
                prefix?: Uint8Array;
            };
            path?: number[];
        }): _73.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _73.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.CompressedNonExistenceProof;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _73.HashOp;
                    prehashKey?: _73.HashOp;
                    prehashValue?: _73.HashOp;
                    length?: _73.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _73.HashOp;
                    prehashKey?: _73.HashOp;
                    prehashValue?: _73.HashOp;
                    length?: _73.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
        }): _73.CompressedNonExistenceProof;
    };
};
