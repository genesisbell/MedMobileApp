import { OptionsType } from "types";

// General Options
export function getYears(){

    const years:OptionsType = [];

    for (let i = 0; i < 18; i++) {
        years.push({
            text: `${i}`,
            info: {key: i}
        })
    }

    return years;

}
export function getMonths(){

    const months:OptionsType = [];

    for (let i = 0; i < 12; i++) {
        months.push({
            text: `${i}`,
            info: {key: i}
        })
    }

    return months;

}
