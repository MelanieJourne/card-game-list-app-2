import french_text from './French'

export interface IDictionary {
    [index: string]: string;
}

export const translate = function(key:String): String {
    var str:String = '';
    str = french_text[key];
    if(str === '') {
        return key;
    }
    return str;
}