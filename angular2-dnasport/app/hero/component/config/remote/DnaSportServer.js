"use strict";
/**
 * Created by china on 2017/2/18.
 */
var url = "http://localhost:8080/spring-boot-demo/";
var getUser = "demo/index";
var DnaSportServer = (function () {
    function DnaSportServer() {
    }
    return DnaSportServer;
}());
DnaSportServer.getUser = url + getUser;
exports.DnaSportServer = DnaSportServer;
//# sourceMappingURL=DnaSportServer.js.map