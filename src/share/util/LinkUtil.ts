import URIJS from "urijs";

export default class LinkUtil {
  static domain: string = "";

  static setQuery(path: string, key: string, val: any) {
    const uri = new URIJS(path);
    uri.setQuery(key, val);
    return uri.toString();
  }
}
