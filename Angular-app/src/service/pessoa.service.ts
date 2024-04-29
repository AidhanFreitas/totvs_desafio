import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa.model';
import { HttpHeaders } from '@angular/common/http';

const baseUrl = 'https://api.baserow.io/api/database/rows/table/279702/?user_field_names=true';
const baseUrl2 = 'https://api.baserow.io/api/database/rows/table/279702';

@Injectable({
    providedIn: 'root'
})
export class PessoaService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<{ results: Pessoa[] }> {
        return this.http.get<{ results: Pessoa[] }>(baseUrl, { headers: this.getHeaders() });
    }

    get(id: any): Observable<Pessoa> {
        return this.http.get<Pessoa>(`${baseUrl2}/${id}/?user_field_names=true`, { headers: this.getHeaders() });
    }

    create(data: any): Observable<any> {
        return this.http.post(baseUrl, data, { headers: this.getHeaders() });
    }

    update(id: any, data: any): Observable<any> {
        return this.http.patch(`${baseUrl2}/${id}/?user_field_names=true`, data, { headers: this.getHeaders() });
    }

    delete(id: any): Observable<any> {
        return this.http.delete(`${baseUrl2}/${id}/`, { headers: this.getHeaders() });
    }

    private getHeaders(): HttpHeaders {
        const authToken = 'fqZGEhPtHGIjBg0pmOMOXNRikKF08gSL';
        return new HttpHeaders({
            'Authorization': `Token ${authToken}`,
            'Content-Type': 'application/json'
        });
    }
}