/**
    Format dates:
    Default format: 'M/d/yyyy' -> 2/19/2022

    Months:
    'M-dd-yyyy' -> 2-06-2022
    'MM-dd-yyyy' -> 02-06-2022
    'MMM-dd-yyyy' -> Feb-06-2022
    'MMMM-dd-yyyy' -> February-06-2022

    Ordinal dates: add 'oo' to date 
    'MMM doo yyyy' -> Feb 6th 2022
    'MMM ddoo' -> Feb 06th

    From now: use fromNow() function to return relative time.
    const date = new FormatDate(d).fromNow();
    date -> Today at 12:12;
 
*/

const dayOfWeekNames = {
    en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    es: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
};
const monthNames = {
    en: ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"],
    es: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
};

export class FormatDate{
    date: Date;
    locale: string;
    day: number;
    month: number;
    year: number;
    hour: number;
    minute: number;
    second: number;
    miliseconds: string;
    h: number;
    hh: string | number;
    HH: string | number;
    mm: string | number;
    ss: string;
    aaa: string;
    EEEE: string;
    EEE: string;
    dd: string;
    oo: string;
    M: number;
    MM: string | number;
    MMMM: string;
    MMM: string;
    yyyy: string;
    yy: string;

    constructor(d:Date|string, locale?: string){
        this.date = typeof d === 'string' ? new Date(d) : d;
        this.locale = locale || 'en';
        this.day = this.date.getDate();
        this.month = this.date.getMonth();
        this.year = this.date.getFullYear();
        this.hour = this.date.getHours();
        this.minute = this.date.getMinutes();
        this.second = this.date.getSeconds();
        this.miliseconds = this.date.getMilliseconds().toString();
        
        //Format strings
        this.h = this.hour % 12;
        this.hh = this.twoDigitPad(this.h);
        this.HH = this.twoDigitPad(this.hour);
        this.mm = this.twoDigitPad(this.minute);
        this.ss = this.twoDigitPad(this.second).toString();
        this.aaa = this.hour < 12 ? 'AM' : 'PM';
        this.EEEE = dayOfWeekNames[this.locale as keyof typeof dayOfWeekNames][this.date.getDay()];
        this.EEE = this.EEEE.substring(0, 3);
        this.dd = this.twoDigitPad(this.day).toString();
        this.oo = this.nthNumber(this.day);
        this.M = this.month + 1;
        this.MM = this.twoDigitPad(this.M);
        this.MMMM = monthNames[this.locale as keyof typeof monthNames][this.month];
        this.MMM = this.MMMM.substring(0, 3);
        this.yyyy = this.year + "";
        this.yy = this.yyyy.substring(2, 4);
    }

    //Add zero to one digit numbers;
    twoDigitPad(num: number) {
        return num < 10 ? "0" + num : num;
    }
    
    //Add ordinal date to numbers in english
    nthNumber(num: number) {
        if(this.locale === 'es') return '';
        if (num > 3 && num < 21) return "th";
        switch (num % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
    };

    //Format date
    format(patternStr:string = 'M/d/yyyy'){
        // checks to see if month name will be used
        patternStr = patternStr
        .replace('hh', this.hh.toString()).replace('h', this.h.toString())
        .replace('HH', this.HH.toString()).replace('H', this.hour.toString())
        .replace('mm', this.mm.toString()).replace('m', this.minute.toString())
        .replace('ss', this.ss).replace('s', this.second.toString())
        .replace('S', this.miliseconds)
        .replace('dd', this.dd).replace('d', this.day.toString())
        .replace('oo', this.oo)
        .replace('EEEE', this.EEEE).replace('EEE', this.EEE)
        .replace('yyyy', this.yyyy)
        .replace('yy', this.yy)    
        .replace('aaa', this.aaa);
    
        if (patternStr.indexOf('MMM') > -1) {
            patternStr = patternStr
            .replace('MMMM', this.MMMM)
            .replace('MMM', this.MMM);
        }else {
            patternStr = patternStr
            .replace('MM', this.MM.toString())
            .replace('M', this.M.toString());
        }
        return patternStr;
    }

    //from now date format
    fromNow(){
        const today = new Date();
        const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
        const seconds = Math.round((today.getTime() - this.date.getTime()) / 1000);
        const minutes = Math.round(seconds / 60);
        const yesterday = new Date(today.getTime() - DAY_IN_MS);
        const isToday = today.toDateString() === this.date.toDateString();
        const isYesterday = yesterday.toDateString() === this.date.toDateString();
        const isThisYear = today.getFullYear() === this.date.getFullYear();
        let alas = this.hour === 1 ? 'a la' : 'a las';

        const fromNowTexts = {
            en: {
                now: 'now',
                secondsAgo: `${ seconds } segundos`,
                aMinuteAgo: 'about a minute ago',
                minutesAgo: `${ minutes } minutes ago`,
                today: `Today at ${ this.hour }:${ this.twoDigitPad(this.minute) }`,
                yesterday: `Yesterday at ${ this.hour }:${ this.twoDigitPad(this.minute) }`,
                thisYear: `${ this.MMM } ${ this.day }${ this.oo } at ${ this.hour }:${ this.twoDigitPad(this.minute) }`,
                afterThisYear: `${ this.MMM } ${ this.day }${ this.oo } ${ this.year } at ${ this.hour }:${ this.twoDigitPad(this.minute) }`, 
            },
            es: {
                now: 'ahora',
                secondsAgo: `hace ${ seconds } segundos`,
                aMinuteAgo: 'hace alrededor de un minuto',
                minutesAgo: `hace ${ minutes } minutos`,
                today: `Hoy ${alas} ${ this.hour }:${ this.twoDigitPad(this.minute) }`,
                yesterday: `Ayer ${alas} ${ this.hour }:${ this.twoDigitPad(this.minute) }`,
                thisYear: `${ this.MMM } ${ this.day } ${alas} ${ this.hour }:${ this.twoDigitPad(this.minute) }`,
                afterThisYear: `${ this.MMM } ${ this.day } ${ this.year } ${alas} ${ this.hour }:${ this.twoDigitPad(this.minute) }`,
            }
        }

        let fromNowText = fromNowTexts[this.locale as keyof typeof fromNowTexts];

        if (seconds < 5) {
            return fromNowText.now;
        } else if (seconds < 60) {
            return fromNowText.secondsAgo;
        } else if (seconds < 90) {
            return fromNowText.aMinuteAgo;
        } else if (minutes < 60) {
            return fromNowText.minutesAgo;
        } else if (isToday) {
            return fromNowText.today; // Today at 10:20
        } else if (isYesterday) {
            return fromNowText.yesterday; // Yesterday at 10:20
        } else if (isThisYear) {
            return fromNowText.thisYear; // January 10th at 10:20
        }
        
        //January 10th 2017 at 10:20
        return fromNowText.afterThisYear;
    }

}
