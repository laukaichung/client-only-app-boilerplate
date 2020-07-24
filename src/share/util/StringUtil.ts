import capitalize from "lodash/capitalize"
import startCase from "lodash/startCase"
import trim from "lodash/trim";

export class StringUtil {

    static hasVal(val: any): boolean {

        if (val === null || val === undefined || val === 'null' || val === 'undefined') {
            return false
        } else{
            val = String(val);

            if(!val.trim()){
                return false;

            }else if(!isNaN(parseNumber(val))){
                return true;
            }else if(val != 'null' || val != 'undefined') {
                return true
            }
        }
    }

    static capitalize(string){
        return capitalize(startCase(string));
    }

    static escapeHtml(string) {
        return string
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\(/g, "&#40;")
            .replace(/\)/g, "&#41;")
            .replace(/"/g, "&quot;");
    }

    static wordCount(str: string){
        if(!this.hasVal(str)){
            return 0
        }
        return trim(str).split(" ").length
    }
}

export function parseNumber(str: any): number {
    str = String(str);
    if (str.indexOf('.') > -1) {
        return parseFloat(str);
    } else {
        return parseInt(str);
    }
}
