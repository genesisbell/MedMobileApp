import { en } from 'translations';
export function liverFunctionData(lang: typeof en){
  
    return [
        {
            age: 0,
            titles: [
                {
                    name: lang.values.min,
                },
                {
                    name: lang.values.max,
                },
            ],
            values: [
                {
                    name: "ALT",
                    measure: null,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.min,
                            value: 5
                        },
                        {
                            name: lang.values.max,
                            value: 33
                        }
                    ]
                },
                {
                    name: "AST",
                    measure: null,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.min,
                            value: 32
                        },
                        {
                            name: lang.values.max,
                            value: 162
                        }
                    ]
                },
                {
                    name: "GGT",
                    measure: 'U/L',
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.min,
                            value: 23
                        },
                        {
                            name: lang.values.max,
                            value: 219
                        }
                    ]
                },
                {
                    name: "FA",
                    measure: 'U/L',
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.min,
                            value: 90
                        },
                        {
                            name: lang.values.max,
                            value: 273
                        }
                    ]
                },
                {
                    name: "Prot tot",
                    measure: 'g/dL',
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.min,
                            value: 5.3
                        },
                        {
                            name: lang.values.max,
                            value: 8.3
                        }
                    ]
                },
                {
                    name: lang.values.albumin,
                    measure: 'g/dL',
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.min,
                            value: 3.3
                        },
                        {
                            name: lang.values.max,
                            value: 4.5
                        }
                    ]
                },
                {
                    name: lang.values.prealbumin,
                    measure: 'mg/dL',
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.min,
                            value: 2
                        },
                        {
                            name: lang.values.max,
                            value: 12
                        }
                    ]
                },
                {
                    name: lang.values.haptoglobin,
                    measure: 'mg/dL',
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.min,
                            value: 0
                        },
                        {
                            name: lang.values.max,
                            value: 10
                        }
                    ]
                },
                {
                    name: "BT",
                    measure: 'mg/dL',
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.min,
                            value: 0.19
                        },
                        {
                            name: lang.values.max,
                            value: 16.6
                        }
                    ]
                },
                {
                    name: "BD",
                    measure: 'mg/dL',
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.min,
                            value: 0.33
                        },
                        {
                            name: lang.values.max,
                            value: 0.71
                        }
                    ]
                },
                {
                    name: "DHL",
                    measure: 'U/L',
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.min,
                            value: 309
                        },
                        {
                            name: lang.values.max,
                            value: 1222
                        }
                    ]
                }
            ]
        },
    //   {
    //       age: 1,
    //       values: [
    //           {
    //               name: "ALT",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 5
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 33
    //                   }
    //               ]
    //           },
    //           {
    //               name: "AST",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 20
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 67
    //                   }
    //               ]
    //           },
    //           {
    //               name: "GGT",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 8
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 127
    //                   }
    //               ]
    //           },
    //           {
    //               name: "FA",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 134
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 518
    //                   }
    //               ]
    //           },
    //           {
    //               name: "Prot tot",
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 4.4
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 7.1
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.albumin,
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 2.8
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 4.7
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.prealbumin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 5
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 24
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.haptoglobin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 221
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BT",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.68
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BD",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.3
    //                   }
    //               ]
    //           },
    //           {
    //               name: "DHL",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 163
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 452
    //                   }
    //               ]
    //           }
    //       ]
    //   },
    //   {
    //       age: 3,
    //       values: [
    //           {
    //               name: "ALT",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 5
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 33
    //                   }
    //               ]
    //           },
    //           {
    //               name: "AST",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 20
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 67
    //                   }
    //               ]
    //           },
    //           {
    //               name: "GGT",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 8
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 127
    //                   }
    //               ]
    //           },
    //           {
    //               name: "FA",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 134
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 518
    //                   }
    //               ]
    //           },
    //           {
    //               name: "Prot tot",
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 4.4
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 7.1
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.albumin,
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 2.8
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 4.7
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.prealbumin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 5
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 24
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.haptoglobin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 221
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BT",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.68
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BD",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.3
    //                   }
    //               ]
    //           },
    //           {
    //               name: "DHL",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 163
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 452
    //                   }
    //               ]
    //           }
    //       ]
    //   },
    //   {
    //       age: 6,
    //       values: [
    //           {
    //               name: "ALT",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 5
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 33
    //                   }
    //               ]
    //           },
    //           {
    //               name: "AST",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 20
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 67
    //                   }
    //               ]
    //           },
    //           {
    //               name: "GGT",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 8
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 127
    //                   }
    //               ]
    //           },
    //           {
    //               name: "FA",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 134
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 518
    //                   }
    //               ]
    //           },
    //           {
    //               name: "Prot tot",
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 4.4
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 7.1
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.albumin,
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 2.8
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 4.7
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.prealbumin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 5
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 24
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.haptoglobin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 221
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BT",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.68
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BD",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.3
    //                   }
    //               ]
    //           },
    //           {
    //               name: "DHL",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 163
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 452
    //                   }
    //               ]
    //           }
    //       ]
    //   },
    //   {
    //       age: 12,
    //       values: [
    //           {
    //               name: "ALT",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 9
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 25
    //                   }
    //               ]
    //           },
    //           {
    //               name: "AST",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 21
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 44
    //                   }
    //               ]
    //           },
    //           {
    //               name: "GGT",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 16
    //                   }
    //               ]
    //           },
    //           {
    //               name: "FA",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 156
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 369
    //                   }
    //               ]
    //           },
    //           {
    //               name: "Prot tot",
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 7.5
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.albumin,
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 3.8
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 4.7
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.prealbumin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 12
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 23
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.haptoglobin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 163
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BT",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.4
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BD",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.2
    //                   }
    //               ]
    //           },
    //           {
    //               name: "DHL",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 192
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 321
    //                   }
    //               ]
    //           }
    //       ]
    //   },
    //   {
    //       age: 24,
    //       values: [
    //           {
    //               name: "ALT",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 9
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 25
    //                   }
    //               ]
    //           },
    //           {
    //               name: "AST",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 21
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 44
    //                   }
    //               ]
    //           },
    //           {
    //               name: "GGT",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 16
    //                   }
    //               ]
    //           },
    //           {
    //               name: "FA",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 156
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 369
    //                   }
    //               ]
    //           },
    //           {
    //               name: "Prot tot",
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 7.5
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.albumin,
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 3.8
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 4.7
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.prealbumin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 12
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 23
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.haptoglobin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 163
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BT",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.4
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BD",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.2
    //                   }
    //               ]
    //           },
    //           {
    //               name: "DHL",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 192
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 321
    //                   }
    //               ]
    //           }
    //       ]
    //   },
    //   {
    //       age: 36,
    //       values: [
    //           {
    //               name: "ALT",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 9
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 25
    //                   }
    //               ]
    //           },
    //           {
    //               name: "AST",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 21
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 44
    //                   }
    //               ]
    //           },
    //           {
    //               name: "GGT",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 16
    //                   }
    //               ]
    //           },
    //           {
    //               name: "FA",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 156
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 369
    //                   }
    //               ]
    //           },
    //           {
    //               name: "Prot tot",
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 7.5
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.albumin,
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 3.8
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 4.7
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.prealbumin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 12
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 23
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.haptoglobin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 163
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BT",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.4
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BD",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.2
    //                   }
    //               ]
    //           },
    //           {
    //               name: "DHL",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 192
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 321
    //                   }
    //               ]
    //           }
    //       ]
    //   },
    //   {
    //       age: 48,
    //       values: [
    //           {
    //               name: "ALT",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 9
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 25
    //                   }
    //               ]
    //           },
    //           {
    //               name: "AST",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 21
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 44
    //                   }
    //               ]
    //           },
    //           {
    //               name: "GGT",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 16
    //                   }
    //               ]
    //           },
    //           {
    //               name: "FA",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 156
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 369
    //                   }
    //               ]
    //           },
    //           {
    //               name: "Prot tot",
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 7.5
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.albumin,
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 3.8
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 4.7
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.prealbumin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 12
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 23
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.haptoglobin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 163
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BT",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.4
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BD",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.2
    //                   }
    //               ]
    //           },
    //           {
    //               name: "DHL",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 192
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 321
    //                   }
    //               ]
    //           }
    //       ]
    //   },
    //   {
    //       age: 60,
    //       values: [
    //           {
    //               name: "ALT",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 9
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 25
    //                   }
    //               ]
    //           },
    //           {
    //               name: "AST",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 21
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 44
    //                   }
    //               ]
    //           },
    //           {
    //               name: "GGT",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 16
    //                   }
    //               ]
    //           },
    //           {
    //               name: "FA",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 156
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 369
    //                   }
    //               ]
    //           },
    //           {
    //               name: "Prot tot",
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 7.5
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.albumin,
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 3.8
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 4.7
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.prealbumin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 14
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 26
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.haptoglobin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 163
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BT",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.4
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BD",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.2
    //                   }
    //               ]
    //           },
    //           {
    //               name: "DHL",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 192
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 321
    //                   }
    //               ]
    //           }
    //       ]
    //   },
    //   {
    //       age: 72,
    //       values: [
    //           {
    //               name: "ALT",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 9
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 25
    //                   }
    //               ]
    //           },
    //           {
    //               name: "AST",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 21
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 44
    //                   }
    //               ]
    //           },
    //           {
    //               name: "GGT",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 16
    //                   }
    //               ]
    //           },
    //           {
    //               name: "FA",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 156
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 369
    //                   }
    //               ]
    //           },
    //           {
    //               name: "Prot tot",
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6.4
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 7.7
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.albumin,
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 3.8
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 4.7
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.prealbumin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 14
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 26
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.haptoglobin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 163
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BT",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.4
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BD",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.2
    //                   }
    //               ]
    //           },
    //           {
    //               name: "DHL",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 192
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 321
    //                   }
    //               ]
    //           }
    //       ]
    //   },
    //   {
    //       age: 84,
    //       values: [
    //           {
    //               name: "ALT",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 9
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 25
    //                   }
    //               ]
    //           },
    //           {
    //               name: "AST",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 18
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 36
    //                   }
    //               ]
    //           },
    //           {
    //               name: "GGT",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 16
    //                   }
    //               ]
    //           },
    //           {
    //               name: "FA",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 156
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 369
    //                   }
    //               ]
    //           },
    //           {
    //               name: "Prot tot",
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6.4
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 7.7
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.albumin,
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 3.8
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 4.7
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.prealbumin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 14
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 26
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.haptoglobin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 163
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BT",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.4
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BD",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.2
    //                   }
    //               ]
    //           },
    //           {
    //               name: "DHL",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 192
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 321
    //                   }
    //               ]
    //           }
    //       ]
    //   },
    //   {
    //       age: 96,
    //       values: [
    //           {
    //               name: "ALT",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 9
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 25
    //                   }
    //               ]
    //           },
    //           {
    //               name: "AST",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 18
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 36
    //                   }
    //               ]
    //           },
    //           {
    //               name: "GGT",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 16
    //                   }
    //               ]
    //           },
    //           {
    //               name: "FA",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 156
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 369
    //                   }
    //               ]
    //           },
    //           {
    //               name: "Prot tot",
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6.4
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 7.7
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.albumin,
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 4.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 4.8
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.prealbumin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 14
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 26
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.haptoglobin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 163
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BT",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.4
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BD",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.2
    //                   }
    //               ]
    //           },
    //           {
    //               name: "DHL",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 192
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 321
    //                   }
    //               ]
    //           }
    //       ]
    //   },
    //   {
    //       age: 108,
    //       values: [
    //           {
    //               name: "ALT",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 9
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 25
    //                   }
    //               ]
    //           },
    //           {
    //               name: "AST",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 18
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 36
    //                   }
    //               ]
    //           },
    //           {
    //               name: "GGT",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 16
    //                   }
    //               ]
    //           },
    //           {
    //               name: "FA",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 156
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 369
    //                   }
    //               ]
    //           },
    //           {
    //               name: "Prot tot",
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6.5
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 8.1
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.albumin,
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 4.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 4.8
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.prealbumin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 14
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 26
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.haptoglobin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 163
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BT",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.55
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BD",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.29
    //                   }
    //               ]
    //           },
    //           {
    //               name: "DHL",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 192
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 321
    //                   }
    //               ]
    //           }
    //       ]
    //   },
    //   {
    //       age: 120,
    //       values: [
    //           {
    //               name: "ALT",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 9
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 25
    //                   }
    //               ]
    //           },
    //           {
    //               name: "AST",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 18
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 36
    //                   }
    //               ]
    //           },
    //           {
    //               name: "GGT",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 16
    //                   }
    //               ]
    //           },
    //           {
    //               name: "FA",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 141
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 460
    //                   }
    //               ]
    //           },
    //           {
    //               name: "Prot tot",
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6.5
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 8.1
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.albumin,
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 4.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 4.8
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.prealbumin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 14
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 26
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.haptoglobin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 163
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BT",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.55
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BD",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.29
    //                   }
    //               ]
    //           },
    //           {
    //               name: "DHL",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 130
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 250
    //                   }
    //               ]
    //           }
    //       ]
    //   },
    //   {
    //       age: 12,
    //       values: [
    //           {
    //               name: "ALT",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 9
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 25
    //                   }
    //               ]
    //           },
    //           {
    //               name: "AST",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 18
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 36
    //                   }
    //               ]
    //           },
    //           {
    //               name: "GGT",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 21
    //                   }
    //               ]
    //           },
    //           {
    //               name: "FA",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 141
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 460
    //                   }
    //               ]
    //           },
    //           {
    //               name: "Prot tot",
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6.5
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 8.1
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.albumin,
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 4.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 4.8
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.prealbumin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 14
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 26
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.haptoglobin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 163
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BT",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.55
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BD",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.29
    //                   }
    //               ]
    //           },
    //           {
    //               name: "DHL",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 130
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 250
    //                   }
    //               ]
    //           }
    //       ]
    //   },
    //   {
    //       age: 144,
    //       values: [
    //           {
    //               name: "ALT",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 9
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 25
    //                   }
    //               ]
    //           },
    //           {
    //               name: "AST",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 13
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 35
    //                   }
    //               ]
    //           },
    //           {
    //               name: "GGT",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 21
    //                   }
    //               ]
    //           },
    //           {
    //               name: "FA",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 141
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 460
    //                   }
    //               ]
    //           },
    //           {
    //               name: "Prot tot",
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6.5
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 8.1
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.albumin,
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 4.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 4.8
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.prealbumin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 14
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 26
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.haptoglobin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 179
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BT",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.7
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BD",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.05
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.29
    //                   }
    //               ]
    //           },
    //           {
    //               name: "DHL",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 130
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 250
    //                   }
    //               ]
    //           }
    //       ]
    //   },
    //   {
    //       age: 156,
    //       values: [
    //           {
    //               name: "ALT",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 9
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 24
    //                   }
    //               ]
    //           },
    //           {
    //               name: "AST",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 13
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 35
    //                   }
    //               ]
    //           },
    //           {
    //               name: "GGT",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 21
    //                   }
    //               ]
    //           },
    //           {
    //               name: "FA",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 127
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 517
    //                   }
    //               ]
    //           },
    //           {
    //               name: "Prot tot",
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6.5
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 8.1
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.albumin,
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 4.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 4.8
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.prealbumin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 18
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 31
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.haptoglobin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 179
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BT",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.7
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BD",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.39
    //                   }
    //               ]
    //           },
    //           {
    //               name: "DHL",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 130
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 250
    //                   }
    //               ]
    //           }
    //       ]
    //   },
    //   {
    //       age: 168,
    //       values: [
    //           {
    //               name: "ALT",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 9
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 24
    //                   }
    //               ]
    //           },
    //           {
    //               name: "AST",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 13
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 35
    //                   }
    //               ]
    //           },
    //           {
    //               name: "GGT",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 21
    //                   }
    //               ]
    //           },
    //           {
    //               name: "FA",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 127
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 517
    //                   }
    //               ]
    //           },
    //           {
    //               name: "Prot tot",
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6.5
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 8.1
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.albumin,
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 4.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 4.8
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.prealbumin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 18
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 31
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.haptoglobin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 179
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BT",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.7
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BD",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.39
    //                   }
    //               ]
    //           },
    //           {
    //               name: "DHL",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 130
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 250
    //                   }
    //               ]
    //           }
    //       ]
    //   },
    //   {
    //       age: 180,
    //       values: [
    //           {
    //               name: "ALT",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 9
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 24
    //                   }
    //               ]
    //           },
    //           {
    //               name: "AST",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 13
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 35
    //                   }
    //               ]
    //           },
    //           {
    //               name: "GGT",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 21
    //                   }
    //               ]
    //           },
    //           {
    //               name: "FA",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 89
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 565
    //                   }
    //               ]
    //           },
    //           {
    //               name: "Prot tot",
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6.5
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 8.1
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.albumin,
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 4
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 5
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.prealbumin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 18
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 31
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.haptoglobin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 179
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BT",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.84
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BD",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.39
    //                   }
    //               ]
    //           },
    //           {
    //               name: "DHL",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 130
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 250
    //                   }
    //               ]
    //           }
    //       ]
    //   },
    //   {
    //       age: 192,
    //       values: [
    //           {
    //               name: "ALT",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 9
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 24
    //                   }
    //               ]
    //           },
    //           {
    //               name: "AST",
    //               measure: null,
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 13
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 35
    //                   }
    //               ]
    //           },
    //           {
    //               name: "GGT",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 21
    //                   }
    //               ]
    //           },
    //           {
    //               name: "FA",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 89
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 565
    //                   }
    //               ]
    //           },
    //           {
    //               name: "Prot tot",
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6.5
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 8.1
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.albumin,
    //               measure: 'g/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 4
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 5
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.prealbumin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 17
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 35
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.haptoglobin,
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 179
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BT",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.84
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BD",
    //               measure: 'mg/dL',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.39
    //                   }
    //               ]
    //           },
    //           {
    //               name: "DHL",
    //               measure: 'U/L',
    //               isGirl: null,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 130
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 250
    //                   }
    //               ]
    //           }
    //       ]
    //   },
    //   {
    //       age: 204,
    //       values: [
    //           {
    //               name: "ALT",
    //               measure: null,
    //               isGirl: true,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 9
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 24
    //                   }
    //               ]
    //           },
    //           {
    //               name: "AST",
    //               measure: null,
    //               isGirl: true,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 13
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 26
    //                   }
    //               ]
    //           },
    //           {
    //               name: "GGT",
    //               measure: 'U/L',
    //               isGirl: true,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 21
    //                   }
    //               ]
    //           },
    //           {
    //               name: "FA",
    //               measure: 'U/L',
    //               isGirl: true,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 48
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 95
    //                   }
    //               ]
    //           },
    //           {
    //               name: "Prot tot",
    //               measure: 'g/dL',
    //               isGirl: true,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6.5
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 8.1
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.albumin,
    //               measure: 'g/dL',
    //               isGirl: true,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 4
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 4.9
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.prealbumin,
    //               measure: 'mg/dL',
    //               isGirl: true,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 17
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 33
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.haptoglobin,
    //               measure: 'mg/dL',
    //               isGirl: true,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 179
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BT",
    //               measure: 'mg/dL',
    //               isGirl: true,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.84
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BD",
    //               measure: 'mg/dL',
    //               isGirl: true,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.39
    //                   }
    //               ]
    //           },
    //           {
    //               name: "DHL",
    //               measure: 'U/L',
    //               isGirl: true,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 157
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 272
    //                   }
    //               ]
    //           },
    //           {
    //               name: "ALT",
    //               measure: null,
    //               isGirl: false,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 9
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 24
    //                   }
    //               ]
    //           },
    //           {
    //               name: "AST",
    //               measure: null,
    //               isGirl: false,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 14
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 35
    //                   }
    //               ]
    //           },
    //           {
    //               name: "GGT",
    //               measure: 'U/L',
    //               isGirl: false,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 21
    //                   }
    //               ]
    //           },
    //           {
    //               name: "FA",
    //               measure: 'U/L',
    //               isGirl: false,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 59
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 164
    //                   }
    //               ]
    //           },
    //           {
    //               name: "Prot tot",
    //               measure: 'g/dL',
    //               isGirl: false,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 6.5
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 8.1
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.albumin,
    //               measure: 'g/dL',
    //               isGirl: false,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 4.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 5.1
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.prealbumin,
    //               measure: 'mg/dL',
    //               isGirl: false,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 17
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 35
    //                   }
    //               ]
    //           },
    //           {
    //               name: lang.values.haptoglobin,
    //               measure: 'mg/dL',
    //               isGirl: false,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 7
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 179
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BT",
    //               measure: 'mg/dL',
    //               isGirl: false,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.1
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.84
    //                   }
    //               ]
    //           },
    //           {
    //               name: "BD",
    //               measure: 'mg/dL',
    //               isGirl: false,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 0.11
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 0.42
    //                   }
    //               ]
    //           },
    //           {
    //               name: "DHL",
    //               measure: 'U/L',
    //               isGirl: false,
    //               values: [
    //                   {
    //                       name: lang.values.min,
    //                       value: 170
    //                   },
    //                   {
    //                       name: lang.values.max,
    //                       value: 283
    //                   }
    //               ]
    //           }
    //       ]
    //   },
  ]
}