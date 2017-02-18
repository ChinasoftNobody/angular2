import {Headers} from "@angular/http";
/**
 * Created by china on 2017/2/18.
 */
const headers: Headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
export class HttpHeader {
    public static HEADERS = headers;
}