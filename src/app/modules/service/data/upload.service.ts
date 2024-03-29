import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/environments/environment';

@Injectable()
export class UploadService {

    constructor(private http: HttpClient) { }

    uploadFiles(criterio: any){
        return this.http.post(`${API_URL}/upload`, criterio);
    }
}
