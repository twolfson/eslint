"use strict";

/**
 * Parser: babel-eslint v7.2.3
 * Source code:
 * // @flow
 * type FieldOptions<T> = {| defaultValue: T |}
 * type DateFieldOptions = {| ...FieldOptions<Date> |}
 */

exports.parse = () => ({
    "type": "Program",
    "start": 0,
    "end": 105,
    "loc": {
        "start": {
            "line": 2,
            "column": 0
        },
        "end": {
            "line": 3,
            "column": 51
        }
    },
    "comments": [
        {
            "type": "Line",
            "value": " @flow",
            "start": 0,
            "end": 8,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 8
                }
            },
            "range": [
                0,
                8
            ]
        }
    ],
    "tokens": [
        {
            "type": "Identifier",
            "value": "type",
            "start": 9,
            "end": 13,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 0
                },
                "end": {
                    "line": 2,
                    "column": 4
                }
            },
            "range": [
                9,
                13
            ]
        },
        {
            "type": "Identifier",
            "value": "FieldOptions",
            "start": 14,
            "end": 26,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 5
                },
                "end": {
                    "line": 2,
                    "column": 17
                }
            },
            "range": [
                14,
                26
            ]
        },
        {
            "type": "Punctuator",
            "value": "<",
            "start": 26,
            "end": 27,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 17
                },
                "end": {
                    "line": 2,
                    "column": 18
                }
            },
            "range": [
                26,
                27
            ]
        },
        {
            "type": "Identifier",
            "value": "T",
            "start": 27,
            "end": 28,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 18
                },
                "end": {
                    "line": 2,
                    "column": 19
                }
            },
            "range": [
                27,
                28
            ]
        },
        {
            "type": "Punctuator",
            "value": ">",
            "start": 28,
            "end": 29,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 19
                },
                "end": {
                    "line": 2,
                    "column": 20
                }
            },
            "range": [
                28,
                29
            ]
        },
        {
            "type": "Punctuator",
            "value": "=",
            "start": 30,
            "end": 31,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 21
                },
                "end": {
                    "line": 2,
                    "column": 22
                }
            },
            "range": [
                30,
                31
            ]
        },
        {
            "type": {
                "label": "{|",
                "beforeExpr": true,
                "startsExpr": true,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null,
                "updateContext": null
            },
            "value": "{|",
            "start": 32,
            "end": 34,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 23
                },
                "end": {
                    "line": 2,
                    "column": 25
                }
            },
            "range": [
                32,
                34
            ]
        },
        {
            "type": "Identifier",
            "value": "defaultValue",
            "start": 35,
            "end": 47,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 26
                },
                "end": {
                    "line": 2,
                    "column": 38
                }
            },
            "range": [
                35,
                47
            ]
        },
        {
            "type": "Punctuator",
            "value": ":",
            "start": 47,
            "end": 48,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 38
                },
                "end": {
                    "line": 2,
                    "column": 39
                }
            },
            "range": [
                47,
                48
            ]
        },
        {
            "type": "Identifier",
            "value": "T",
            "start": 49,
            "end": 50,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 40
                },
                "end": {
                    "line": 2,
                    "column": 41
                }
            },
            "range": [
                49,
                50
            ]
        },
        {
            "type": {
                "label": "|}",
                "beforeExpr": false,
                "startsExpr": false,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null,
                "updateContext": null
            },
            "value": "|}",
            "start": 51,
            "end": 53,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 42
                },
                "end": {
                    "line": 2,
                    "column": 44
                }
            },
            "range": [
                51,
                53
            ]
        },
        {
            "type": "Identifier",
            "value": "type",
            "start": 54,
            "end": 58,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 0
                },
                "end": {
                    "line": 3,
                    "column": 4
                }
            },
            "range": [
                54,
                58
            ]
        },
        {
            "type": "Identifier",
            "value": "DateFieldOptions",
            "start": 59,
            "end": 75,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 5
                },
                "end": {
                    "line": 3,
                    "column": 21
                }
            },
            "range": [
                59,
                75
            ]
        },
        {
            "type": "Punctuator",
            "value": "=",
            "start": 76,
            "end": 77,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 22
                },
                "end": {
                    "line": 3,
                    "column": 23
                }
            },
            "range": [
                76,
                77
            ]
        },
        {
            "type": {
                "label": "{|",
                "beforeExpr": true,
                "startsExpr": true,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null,
                "updateContext": null
            },
            "value": "{|",
            "start": 78,
            "end": 80,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 24
                },
                "end": {
                    "line": 3,
                    "column": 26
                }
            },
            "range": [
                78,
                80
            ]
        },
        {
            "type": "Punctuator",
            "value": "...",
            "start": 81,
            "end": 84,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 27
                },
                "end": {
                    "line": 3,
                    "column": 30
                }
            },
            "range": [
                81,
                84
            ]
        },
        {
            "type": "Identifier",
            "value": "FieldOptions",
            "start": 84,
            "end": 96,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 30
                },
                "end": {
                    "line": 3,
                    "column": 42
                }
            },
            "range": [
                84,
                96
            ]
        },
        {
            "type": "Punctuator",
            "value": "<",
            "start": 96,
            "end": 97,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 42
                },
                "end": {
                    "line": 3,
                    "column": 43
                }
            },
            "range": [
                96,
                97
            ]
        },
        {
            "type": "Identifier",
            "value": "Date",
            "start": 97,
            "end": 101,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 43
                },
                "end": {
                    "line": 3,
                    "column": 47
                }
            },
            "range": [
                97,
                101
            ]
        },
        {
            "type": "Punctuator",
            "value": ">",
            "start": 101,
            "end": 102,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 47
                },
                "end": {
                    "line": 3,
                    "column": 48
                }
            },
            "range": [
                101,
                102
            ]
        },
        {
            "type": {
                "label": "|}",
                "beforeExpr": false,
                "startsExpr": false,
                "rightAssociative": false,
                "isLoop": false,
                "isAssign": false,
                "prefix": false,
                "postfix": false,
                "binop": null,
                "updateContext": null
            },
            "value": "|}",
            "start": 103,
            "end": 105,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 49
                },
                "end": {
                    "line": 3,
                    "column": 51
                }
            },
            "range": [
                103,
                105
            ]
        }
    ],
    "range": [
        9,
        105
    ],
    "sourceType": "module",
    "body": [
        {
            "type": "TypeAlias",
            "start": 9,
            "end": 53,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 0
                },
                "end": {
                    "line": 2,
                    "column": 44
                }
            },
            "id": {
                "type": "Identifier",
                "start": 14,
                "end": 26,
                "loc": {
                    "start": {
                        "line": 2,
                        "column": 5
                    },
                    "end": {
                        "line": 2,
                        "column": 17
                    },
                    "identifierName": "FieldOptions"
                },
                "name": "FieldOptions",
                "range": [
                    14,
                    26
                ],
                "_babelType": "Identifier"
            },
            "typeParameters": {
                "type": "TypeParameterDeclaration",
                "start": 26,
                "end": 29,
                "loc": {
                    "start": {
                        "line": 2,
                        "column": 17
                    },
                    "end": {
                        "line": 2,
                        "column": 20
                    }
                },
                "params": [
                    {
                        "type": "Identifier",
                        "start": 27,
                        "end": 28,
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 18
                            },
                            "end": {
                                "line": 2,
                                "column": 19
                            }
                        },
                        "name": "T",
                        "variance": null,
                        "range": [
                            27,
                            28
                        ],
                        "_babelType": "TypeParameter"
                    }
                ],
                "range": [
                    26,
                    29
                ],
                "_babelType": "TypeParameterDeclaration"
            },
            "right": {
                "type": "ObjectTypeAnnotation",
                "start": 32,
                "end": 53,
                "loc": {
                    "start": {
                        "line": 2,
                        "column": 23
                    },
                    "end": {
                        "line": 2,
                        "column": 44
                    }
                },
                "callProperties": [],
                "properties": [
                    {
                        "type": "ObjectTypeProperty",
                        "start": 35,
                        "end": 50,
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 26
                            },
                            "end": {
                                "line": 2,
                                "column": 41
                            }
                        },
                        "value": {
                            "type": "GenericTypeAnnotation",
                            "start": 49,
                            "end": 50,
                            "loc": {
                                "start": {
                                    "line": 2,
                                    "column": 40
                                },
                                "end": {
                                    "line": 2,
                                    "column": 41
                                }
                            },
                            "typeParameters": null,
                            "id": {
                                "type": "Identifier",
                                "start": 49,
                                "end": 50,
                                "loc": {
                                    "start": {
                                        "line": 2,
                                        "column": 40
                                    },
                                    "end": {
                                        "line": 2,
                                        "column": 41
                                    },
                                    "identifierName": "T"
                                },
                                "name": "T",
                                "range": [
                                    49,
                                    50
                                ],
                                "_babelType": "Identifier"
                            },
                            "range": [
                                49,
                                50
                            ],
                            "_babelType": "GenericTypeAnnotation"
                        },
                        "optional": false,
                        "static": false,
                        "variance": null,
                        "range": [
                            35,
                            50
                        ],
                        "_babelType": "ObjectTypeProperty"
                    }
                ],
                "indexers": [],
                "exact": true,
                "range": [
                    32,
                    53
                ],
                "_babelType": "ObjectTypeAnnotation"
            },
            "leadingComments": [
                {
                    "type": "Line",
                    "value": " @flow",
                    "start": 0,
                    "end": 8,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 8
                        }
                    },
                    "range": [
                        0,
                        8
                    ]
                }
            ],
            "range": [
                9,
                53
            ],
            "_babelType": "TypeAlias"
        },
        {
            "type": "TypeAlias",
            "start": 54,
            "end": 105,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 0
                },
                "end": {
                    "line": 3,
                    "column": 51
                }
            },
            "id": {
                "type": "Identifier",
                "start": 59,
                "end": 75,
                "loc": {
                    "start": {
                        "line": 3,
                        "column": 5
                    },
                    "end": {
                        "line": 3,
                        "column": 21
                    },
                    "identifierName": "DateFieldOptions"
                },
                "name": "DateFieldOptions",
                "range": [
                    59,
                    75
                ],
                "_babelType": "Identifier"
            },
            "typeParameters": null,
            "right": {
                "type": "ObjectTypeAnnotation",
                "start": 78,
                "end": 105,
                "loc": {
                    "start": {
                        "line": 3,
                        "column": 24
                    },
                    "end": {
                        "line": 3,
                        "column": 51
                    }
                },
                "callProperties": [],
                "properties": [
                    {
                        "type": "ObjectTypeSpreadProperty",
                        "start": 81,
                        "end": 102,
                        "loc": {
                            "start": {
                                "line": 3,
                                "column": 27
                            },
                            "end": {
                                "line": 3,
                                "column": 48
                            }
                        },
                        "argument": {
                            "type": "GenericTypeAnnotation",
                            "start": 84,
                            "end": 102,
                            "loc": {
                                "start": {
                                    "line": 3,
                                    "column": 30
                                },
                                "end": {
                                    "line": 3,
                                    "column": 48
                                }
                            },
                            "typeParameters": {
                                "type": "TypeParameterInstantiation",
                                "start": 96,
                                "end": 102,
                                "loc": {
                                    "start": {
                                        "line": 3,
                                        "column": 42
                                    },
                                    "end": {
                                        "line": 3,
                                        "column": 48
                                    }
                                },
                                "params": [
                                    {
                                        "type": "GenericTypeAnnotation",
                                        "start": 97,
                                        "end": 101,
                                        "loc": {
                                            "start": {
                                                "line": 3,
                                                "column": 43
                                            },
                                            "end": {
                                                "line": 3,
                                                "column": 47
                                            }
                                        },
                                        "typeParameters": null,
                                        "id": {
                                            "type": "Identifier",
                                            "start": 97,
                                            "end": 101,
                                            "loc": {
                                                "start": {
                                                    "line": 3,
                                                    "column": 43
                                                },
                                                "end": {
                                                    "line": 3,
                                                    "column": 47
                                                },
                                                "identifierName": "Date"
                                            },
                                            "name": "Date"
                                        }
                                    }
                                ]
                            },
                            "id": {
                                "type": "Identifier",
                                "start": 84,
                                "end": 96,
                                "loc": {
                                    "start": {
                                        "line": 3,
                                        "column": 30
                                    },
                                    "end": {
                                        "line": 3,
                                        "column": 42
                                    },
                                    "identifierName": "FieldOptions"
                                },
                                "name": "FieldOptions"
                            }
                        },
                        "range": [
                            81,
                            102
                        ],
                        "_babelType": "ObjectTypeSpreadProperty"
                    }
                ],
                "indexers": [],
                "exact": true,
                "range": [
                    78,
                    105
                ],
                "_babelType": "ObjectTypeAnnotation"
            },
            "range": [
                54,
                105
            ],
            "_babelType": "TypeAlias"
        }
    ]
});
