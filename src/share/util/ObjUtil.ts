
export default class ObjUtil {
    static isArrayWithItems(arr: Array<any>): boolean {
        if (arr) {
            if (Array.isArray(arr) && arr.length) {
                return true;
            }
        }
        return false;
    }

    /**
     *  Use this function instead of [...list] to clone a new object.
     *  This thread explains the issue about spread that would lead to state mutation in React:
     *  https://stackoverflow.com/a/47624259/2598292
     */
    static clone<T>(obj): T {
        try {
            return JSON.parse(JSON.stringify(obj));
        }catch(err){
            console.log('ObjUtil.clone problem', err);
            return null;
        }
    }


}