import { HttpClient, HttpHeaders } from "@angular/common/http";

export class SharedService {
    constructor(
        private _httpClient: HttpClient
    ){}

    GetAllUsers(id: string) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._httpClient.get("http://localhost:5000/api/Users/GetAllUsers" + id, {headers});
    }

    GetUserDetails(login: string) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._httpClient.get("http://localhost:5000/api/Users/GetUserDetails" + login, {headers});
    }

    GetUserRepos(login: string) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._httpClient.get("http://localhost:5000/api/Users/GetUserRepos" + login, {headers});
    }
}