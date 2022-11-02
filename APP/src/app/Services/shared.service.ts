import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    constructor(
        private _httpClient: HttpClient
    ){}

    GetAllUsers(id: string) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._httpClient.get("https://shawandpartners-murilo.herokuapp.com/api/Users/GetAllUsers/" + id, {headers});
    }

    GetUserDetails(login: string) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._httpClient.get("https://shawandpartners-murilo.herokuapp.com/api/Users/GetUserDetails/" + login, {headers});
    }

    GetUserRepos(login: string) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._httpClient.get("https://shawandpartners-murilo.herokuapp.com/api/Users/GetUserRepos/" + login, {headers});
    }
}