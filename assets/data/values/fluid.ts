import { en } from 'translations';
export function fluidsData(lang: typeof en){
  
    return [
        {
            age: 0,
            values: [
                {
                    name: lang.values.protein,
                    measure: "g/dL",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<3.0"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">3.0"
                        }
                    ]
                },
                {
                    name: lang.values.protein,
                    measure: `${lang.general.fluid}/${lang.general.serum}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.5"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.5"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: "UI/L",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<200"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">200"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: `${lang.general.fluid}/${lang.general.serum}mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.6"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.6"
                        }
                    ]
                },
                {
                    name: lang.values.leukocytes,
                    measure: "mm3",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<10000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">10000"
                        }
                    ]
                },
                {
                    name: lang.values.erythrocytes,
                    measure: `mm3mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<5000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">5000"
                        }
                    ]
                },
                {
                    name: lang.values.glucose,
                    measure: `mg/dLmEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">40"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<40"
                        }
                    ]
                },
                {
                    name: "pH",
                    measure: null,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">7.2"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<7.2"
                        }
                    ]
                }
            ]
        },
        {
            age: 1,
            values: [
                {
                    name: lang.values.protein,
                    measure: "g/dL",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<3.0"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">3.0"
                        }
                    ]
                },
                {
                    name: lang.values.protein,
                    measure: `${lang.general.fluid}/${lang.general.serum}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.5"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.5"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: "UI/L",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<200"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">200"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: `${lang.general.fluid}/${lang.general.serum}mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.6"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.6"
                        }
                    ]
                },
                {
                    name: lang.values.leukocytes,
                    measure: "mm3",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<10000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">10000"
                        }
                    ]
                },
                {
                    name: lang.values.erythrocytes,
                    measure: `mm3mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<5000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">5000"
                        }
                    ]
                },
                {
                    name: lang.values.glucose,
                    measure: `mg/dLmEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">40"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<40"
                        }
                    ]
                },
                {
                    name: "pH",
                    measure: null,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">7.2"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<7.2"
                        }
                    ]
                }
            ]
        },
        {
            age: 3,
            values: [
                {
                    name: lang.values.protein,
                    measure: "g/dL",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<3.0"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">3.0"
                        }
                    ]
                },
                {
                    name: lang.values.protein,
                    measure: `${lang.general.fluid}/${lang.general.serum}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.5"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.5"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: "UI/L",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<200"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">200"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: `${lang.general.fluid}/${lang.general.serum}mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.6"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.6"
                        }
                    ]
                },
                {
                    name: lang.values.leukocytes,
                    measure: "mm3",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<10000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">10000"
                        }
                    ]
                },
                {
                    name: lang.values.erythrocytes,
                    measure: `mm3mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<5000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">5000"
                        }
                    ]
                },
                {
                    name: lang.values.glucose,
                    measure: `mg/dLmEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">40"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<40"
                        }
                    ]
                },
                {
                    name: "pH",
                    measure: null,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">7.2"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<7.2"
                        }
                    ]
                }
            ]
        },
        {
            age: 6,
            values: [
                {
                    name: lang.values.protein,
                    measure: "g/dL",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<3.0"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">3.0"
                        }
                    ]
                },
                {
                    name: lang.values.protein,
                    measure: `${lang.general.fluid}/${lang.general.serum}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.5"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.5"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: "UI/L",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<200"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">200"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: `${lang.general.fluid}/${lang.general.serum}mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.6"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.6"
                        }
                    ]
                },
                {
                    name: lang.values.leukocytes,
                    measure: "mm3",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<10000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">10000"
                        }
                    ]
                },
                {
                    name: lang.values.erythrocytes,
                    measure: `mm3mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<5000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">5000"
                        }
                    ]
                },
                {
                    name: lang.values.glucose,
                    measure: `mg/dLmEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">40"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<40"
                        }
                    ]
                },
                {
                    name: "pH",
                    measure: null,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">7.2"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<7.2"
                        }
                    ]
                }
            ]
        },
        {
            age: 12,
            values: [
                {
                    name: lang.values.protein,
                    measure: "g/dL",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<3.0"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">3.0"
                        }
                    ]
                },
                {
                    name: lang.values.protein,
                    measure: `${lang.general.fluid}/${lang.general.serum}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.5"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.5"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: "UI/L",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<200"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">200"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: `${lang.general.fluid}/${lang.general.serum}mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.6"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.6"
                        }
                    ]
                },
                {
                    name: lang.values.leukocytes,
                    measure: "mm3",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<10000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">10000"
                        }
                    ]
                },
                {
                    name: lang.values.erythrocytes,
                    measure: `mm3mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<5000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">5000"
                        }
                    ]
                },
                {
                    name: lang.values.glucose,
                    measure: `mg/dLmEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">40"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<40"
                        }
                    ]
                },
                {
                    name: "pH",
                    measure: null,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">7.2"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<7.2"
                        }
                    ]
                }
            ]
        },
        {
            age: 24,
            values: [
                {
                    name: lang.values.protein,
                    measure: "g/dL",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<3.0"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">3.0"
                        }
                    ]
                },
                {
                    name: lang.values.protein,
                    measure: `${lang.general.fluid}/${lang.general.serum}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.5"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.5"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: "UI/L",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<200"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">200"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: `${lang.general.fluid}/${lang.general.serum}mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.6"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.6"
                        }
                    ]
                },
                {
                    name: lang.values.leukocytes,
                    measure: "mm3",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<10000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">10000"
                        }
                    ]
                },
                {
                    name: lang.values.erythrocytes,
                    measure: `mm3mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<5000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">5000"
                        }
                    ]
                },
                {
                    name: lang.values.glucose,
                    measure: `mg/dLmEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">40"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<40"
                        }
                    ]
                },
                {
                    name: "pH",
                    measure: null,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">7.2"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<7.2"
                        }
                    ]
                }
            ]
        },
        {
            age: 36,
            values: [
                {
                    name: lang.values.protein,
                    measure: "g/dL",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<3.0"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">3.0"
                        }
                    ]
                },
                {
                    name: lang.values.protein,
                    measure: `${lang.general.fluid}/${lang.general.serum}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.5"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.5"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: "UI/L",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<200"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">200"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: `${lang.general.fluid}/${lang.general.serum}mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.6"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.6"
                        }
                    ]
                },
                {
                    name: lang.values.leukocytes,
                    measure: "mm3",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<10000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">10000"
                        }
                    ]
                },
                {
                    name: lang.values.erythrocytes,
                    measure: `mm3mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<5000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">5000"
                        }
                    ]
                },
                {
                    name: lang.values.glucose,
                    measure: `mg/dLmEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">40"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<40"
                        }
                    ]
                },
                {
                    name: "pH",
                    measure: null,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">7.2"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<7.2"
                        }
                    ]
                }
            ]
        },
        {
            age: 48,
            values: [
                {
                    name: lang.values.protein,
                    measure: "g/dL",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<3.0"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">3.0"
                        }
                    ]
                },
                {
                    name: lang.values.protein,
                    measure: `${lang.general.fluid}/${lang.general.serum}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.5"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.5"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: "UI/L",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<200"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">200"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: `${lang.general.fluid}/${lang.general.serum}mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.6"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.6"
                        }
                    ]
                },
                {
                    name: lang.values.leukocytes,
                    measure: "mm3",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<10000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">10000"
                        }
                    ]
                },
                {
                    name: lang.values.erythrocytes,
                    measure: `mm3mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<5000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">5000"
                        }
                    ]
                },
                {
                    name: lang.values.glucose,
                    measure: `mg/dLmEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">40"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<40"
                        }
                    ]
                },
                {
                    name: "pH",
                    measure: null,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">7.2"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<7.2"
                        }
                    ]
                }
            ]
        },
        {
            age: 60,
            values: [
                {
                    name: lang.values.protein,
                    measure: "g/dL",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<3.0"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">3.0"
                        }
                    ]
                },
                {
                    name: lang.values.protein,
                    measure: `${lang.general.fluid}/${lang.general.serum}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.5"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.5"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: "UI/L",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<200"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">200"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: `${lang.general.fluid}/${lang.general.serum}mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.6"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.6"
                        }
                    ]
                },
                {
                    name: lang.values.leukocytes,
                    measure: "mm3",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<10000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">10000"
                        }
                    ]
                },
                {
                    name: lang.values.erythrocytes,
                    measure: `mm3mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<5000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">5000"
                        }
                    ]
                },
                {
                    name: lang.values.glucose,
                    measure: `mg/dLmEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">40"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<40"
                        }
                    ]
                },
                {
                    name: "pH",
                    measure: null,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">7.2"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<7.2"
                        }
                    ]
                }
            ]
        },
        {
            age: 72,
            values: [
                {
                    name: lang.values.protein,
                    measure: "g/dL",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<3.0"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">3.0"
                        }
                    ]
                },
                {
                    name: lang.values.protein,
                    measure: `${lang.general.fluid}/${lang.general.serum}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.5"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.5"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: "UI/L",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<200"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">200"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: `${lang.general.fluid}/${lang.general.serum}mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.6"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.6"
                        }
                    ]
                },
                {
                    name: lang.values.leukocytes,
                    measure: "mm3",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<10000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">10000"
                        }
                    ]
                },
                {
                    name: lang.values.erythrocytes,
                    measure: `mm3mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<5000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">5000"
                        }
                    ]
                },
                {
                    name: lang.values.glucose,
                    measure: `mg/dLmEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">40"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<40"
                        }
                    ]
                },
                {
                    name: "pH",
                    measure: null,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">7.2"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<7.2"
                        }
                    ]
                }
            ]
        },
        {
            age: 84,
            values: [
                {
                    name: lang.values.protein,
                    measure: "g/dL",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<3.0"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">3.0"
                        }
                    ]
                },
                {
                    name: lang.values.protein,
                    measure: `${lang.general.fluid}/${lang.general.serum}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.5"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.5"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: "UI/L",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<200"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">200"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: `${lang.general.fluid}/${lang.general.serum}mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.6"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.6"
                        }
                    ]
                },
                {
                    name: lang.values.leukocytes,
                    measure: "mm3",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<10000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">10000"
                        }
                    ]
                },
                {
                    name: lang.values.erythrocytes,
                    measure: `mm3mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<5000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">5000"
                        }
                    ]
                },
                {
                    name: lang.values.glucose,
                    measure: `mg/dLmEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">40"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<40"
                        }
                    ]
                },
                {
                    name: "pH",
                    measure: null,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">7.2"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<7.2"
                        }
                    ]
                }
            ]
        },
        {
            age: 96,
            values: [
                {
                    name: lang.values.protein,
                    measure: "g/dL",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<3.0"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">3.0"
                        }
                    ]
                },
                {
                    name: lang.values.protein,
                    measure: `${lang.general.fluid}/${lang.general.serum}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.5"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.5"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: "UI/L",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<200"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">200"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: `${lang.general.fluid}/${lang.general.serum}mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.6"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.6"
                        }
                    ]
                },
                {
                    name: lang.values.leukocytes,
                    measure: "mm3",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<10000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">10000"
                        }
                    ]
                },
                {
                    name: lang.values.erythrocytes,
                    measure: `mm3mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<5000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">5000"
                        }
                    ]
                },
                {
                    name: lang.values.glucose,
                    measure: `mg/dLmEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">40"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<40"
                        }
                    ]
                },
                {
                    name: "pH",
                    measure: null,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">7.2"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<7.2"
                        }
                    ]
                }
            ]
        },
        {
            age: 108,
            values: [
                {
                    name: lang.values.protein,
                    measure: "g/dL",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<3.0"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">3.0"
                        }
                    ]
                },
                {
                    name: lang.values.protein,
                    measure: `${lang.general.fluid}/${lang.general.serum}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.5"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.5"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: "UI/L",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<200"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">200"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: `${lang.general.fluid}/${lang.general.serum}mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.6"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.6"
                        }
                    ]
                },
                {
                    name: lang.values.leukocytes,
                    measure: "mm3",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<10000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">10000"
                        }
                    ]
                },
                {
                    name: lang.values.erythrocytes,
                    measure: `mm3mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<5000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">5000"
                        }
                    ]
                },
                {
                    name: lang.values.glucose,
                    measure: `mg/dLmEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">40"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<40"
                        }
                    ]
                },
                {
                    name: "pH",
                    measure: null,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">7.2"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<7.2"
                        }
                    ]
                }
            ]
        },
        {
            age: 120,
            values: [
                {
                    name: lang.values.protein,
                    measure: "g/dL",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<3.0"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">3.0"
                        }
                    ]
                },
                {
                    name: lang.values.protein,
                    measure: `${lang.general.fluid}/${lang.general.serum}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.5"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.5"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: "UI/L",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<200"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">200"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: `${lang.general.fluid}/${lang.general.serum}mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.6"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.6"
                        }
                    ]
                },
                {
                    name: lang.values.leukocytes,
                    measure: "mm3",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<10000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">10000"
                        }
                    ]
                },
                {
                    name: lang.values.erythrocytes,
                    measure: `mm3mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<5000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">5000"
                        }
                    ]
                },
                {
                    name: lang.values.glucose,
                    measure: `mg/dLmEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">40"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<40"
                        }
                    ]
                },
                {
                    name: "pH",
                    measure: null,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">7.2"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<7.2"
                        }
                    ]
                }
            ]
        },
        {
            age: 132,
            values: [
                {
                    name: lang.values.protein,
                    measure: "g/dL",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<3.0"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">3.0"
                        }
                    ]
                },
                {
                    name: lang.values.protein,
                    measure: `${lang.general.fluid}/${lang.general.serum}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.5"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.5"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: "UI/L",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<200"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">200"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: `${lang.general.fluid}/${lang.general.serum}mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.6"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.6"
                        }
                    ]
                },
                {
                    name: lang.values.leukocytes,
                    measure: "mm3",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<10000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">10000"
                        }
                    ]
                },
                {
                    name: lang.values.erythrocytes,
                    measure: `mm3mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<5000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">5000"
                        }
                    ]
                },
                {
                    name: lang.values.glucose,
                    measure: `mg/dLmEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">40"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<40"
                        }
                    ]
                },
                {
                    name: "pH",
                    measure: null,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">7.2"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<7.2"
                        }
                    ]
                }
            ]
        },
        {
            age: 144,
            values: [
                {
                    name: lang.values.protein,
                    measure: "g/dL",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<3.0"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">3.0"
                        }
                    ]
                },
                {
                    name: lang.values.protein,
                    measure: `${lang.general.fluid}/${lang.general.serum}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.5"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.5"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: "UI/L",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<200"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">200"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: `${lang.general.fluid}/${lang.general.serum}mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.6"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.6"
                        }
                    ]
                },
                {
                    name: lang.values.leukocytes,
                    measure: "mm3",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<10000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">10000"
                        }
                    ]
                },
                {
                    name: lang.values.erythrocytes,
                    measure: `mm3mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<5000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">5000"
                        }
                    ]
                },
                {
                    name: lang.values.glucose,
                    measure: `mg/dLmEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">40"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<40"
                        }
                    ]
                },
                {
                    name: "pH",
                    measure: null,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">7.2"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<7.2"
                        }
                    ]
                }
            ]
        },
        {
            age: 156,
            values: [
                {
                    name: lang.values.protein,
                    measure: "g/dL",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<3.0"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">3.0"
                        }
                    ]
                },
                {
                    name: lang.values.protein,
                    measure: `${lang.general.fluid}/${lang.general.serum}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.5"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.5"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: "UI/L",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<200"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">200"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: `${lang.general.fluid}/${lang.general.serum}mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.6"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.6"
                        }
                    ]
                },
                {
                    name: lang.values.leukocytes,
                    measure: "mm3",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<10000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">10000"
                        }
                    ]
                },
                {
                    name: lang.values.erythrocytes,
                    measure: `mm3mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<5000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">5000"
                        }
                    ]
                },
                {
                    name: lang.values.glucose,
                    measure: `mg/dLmEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">40"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<40"
                        }
                    ]
                },
                {
                    name: "pH",
                    measure: null,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">7.2"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<7.2"
                        }
                    ]
                }
            ]
        },
        {
            age: 168,
            values: [
                {
                    name: lang.values.protein,
                    measure: "g/dL",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<3.0"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">3.0"
                        }
                    ]
                },
                {
                    name: lang.values.protein,
                    measure: `${lang.general.fluid}/${lang.general.serum}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.5"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.5"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: "UI/L",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<200"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">200"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: `${lang.general.fluid}/${lang.general.serum}mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.6"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.6"
                        }
                    ]
                },
                {
                    name: lang.values.leukocytes,
                    measure: "mm3",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<10000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">10000"
                        }
                    ]
                },
                {
                    name: lang.values.erythrocytes,
                    measure: `mm3mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<5000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">5000"
                        }
                    ]
                },
                {
                    name: lang.values.glucose,
                    measure: `mg/dLmEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">40"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<40"
                        }
                    ]
                },
                {
                    name: "pH",
                    measure: null,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">7.2"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<7.2"
                        }
                    ]
                }
            ]
        },
        {
            age: 180,
            values: [
                {
                    name: lang.values.protein,
                    measure: "g/dL",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<3.0"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">3.0"
                        }
                    ]
                },
                {
                    name: lang.values.protein,
                    measure: `${lang.general.fluid}/${lang.general.serum}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.5"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.5"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: "UI/L",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<200"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">200"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: `${lang.general.fluid}/${lang.general.serum}mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.6"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.6"
                        }
                    ]
                },
                {
                    name: lang.values.leukocytes,
                    measure: "mm3",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<10000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">10000"
                        }
                    ]
                },
                {
                    name: lang.values.erythrocytes,
                    measure: `mm3mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<5000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">5000"
                        }
                    ]
                },
                {
                    name: lang.values.glucose,
                    measure: `mg/dLmEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">40"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<40"
                        }
                    ]
                },
                {
                    name: "pH",
                    measure: null,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">7.2"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<7.2"
                        }
                    ]
                }
            ]
        },
        {
            age: 192,
            values: [
                {
                    name: lang.values.protein,
                    measure: "g/dL",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<3.0"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">3.0"
                        }
                    ]
                },
                {
                    name: lang.values.protein,
                    measure: `${lang.general.fluid}/${lang.general.serum}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.5"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.5"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: "UI/L",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<200"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">200"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: `${lang.general.fluid}/${lang.general.serum}mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.6"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.6"
                        }
                    ]
                },
                {
                    name: lang.values.leukocytes,
                    measure: "mm3",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<10000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">10000"
                        }
                    ]
                },
                {
                    name: lang.values.erythrocytes,
                    measure: `mm3mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<5000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">5000"
                        }
                    ]
                },
                {
                    name: lang.values.glucose,
                    measure: `mg/dLmEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">40"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<40"
                        }
                    ]
                },
                {
                    name: "pH",
                    measure: null,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">7.2"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<7.2"
                        }
                    ]
                }
            ]
        },
        {
            age: 204,
            values: [
                {
                    name: lang.values.protein,
                    measure: "g/dL",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<3.0"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">3.0"
                        }
                    ]
                },
                {
                    name: lang.values.protein,
                    measure: `${lang.general.fluid}/${lang.general.serum}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.5"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.5"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: "UI/L",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<200"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">200"
                        }
                    ]
                },
                {
                    name: "LDH",
                    measure: `${lang.general.fluid}/${lang.general.serum}mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<0.6"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">0.6"
                        }
                    ]
                },
                {
                    name: lang.values.leukocytes,
                    measure: "mm3",
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<10000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">10000"
                        }
                    ]
                },
                {
                    name: lang.values.erythrocytes,
                    measure: `mm3mEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: "<5000"
                        },
                        {
                            name: lang.values.exudate,
                            value: ">5000"
                        }
                    ]
                },
                {
                    name: lang.values.glucose,
                    measure: `mg/dLmEq/${lang.general.day}`,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">40"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<40"
                        }
                    ]
                },
                {
                    name: "pH",
                    measure: null,
                    isGirl: null,
                    values: [
                        {
                            name: lang.values.transudate,
                            value: ">7.2"
                        },
                        {
                            name: lang.values.exudate,
                            value: "<7.2"
                        }
                    ]
                }
            ]
        }
    ]
}