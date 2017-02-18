"use strict";
var http_1 = require("@angular/http");
/**
 * Created by china on 2017/2/18.
 */
var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
var HttpHeader = (function () {
    function HttpHeader() {
    }
    return HttpHeader;
}());
HttpHeader.HEADERS = headers;
exports.HttpHeader = HttpHeader;
//# sourceMappingURL=HttpHeader.js.map