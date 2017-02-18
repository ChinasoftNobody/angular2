/**
 * Created by china on 2017/2/12.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Hero} from "../component/bean/hero";
import {HttpHeader} from "../component/config/HttpHeader";
import {DnaSportServer} from "../component/config/remote/DnaSportServer";
@Injectable()
export class HeroService {
    private $http;
    constructor($http: Http) {
        this.$http = $http;
    }

    getHeroes(): Promise<Hero[]> {
        return this.$http.post(DnaSportServer.getUser, {}, {headers: HttpHeader.HEADERS})
            .toPromise()
    }
}