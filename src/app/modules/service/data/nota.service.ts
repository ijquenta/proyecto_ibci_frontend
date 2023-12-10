import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/environments/environment';
import { TokenService } from 'src/app/services/token.service';
import { checktoken } from 'src/app/interceptors/token.interceptor';
import { NgxSpinnerService } from 'ngx-spinner';
import { ArchivosService } from '../util/archivos.service';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/modules/models/usuario';
const httpOptions = {
    responseType: 'arraybuffer' as 'json'
};

@Injectable({
    providedIn: 'root',
})
export class NotaService {
    usuario: Usuario;
    constructor(private http: HttpClient, private tokenService: TokenService, private spinner: NgxSpinnerService, private archivos: ArchivosService, private authService: AuthService) { }


    listarNota() {
        return this.http.get(`${API_URL}/listarNota`);
    }
    listarNotaEstudiante(data) {
        return this.http.post(`${API_URL}/listarNotaEstudiante`, data);
    }
    listarNotaDocente(data) {
        return this.http.post(`${API_URL}/listarNotaDocente`, data);
    }
    listarNotaEstudianteMateria(data) {
        return this.http.post(`${API_URL}/listarNotaEstudianteMateria`, data);
    }
    listarNotaEstudianteCurso(data) {
        return this.http.post(`${API_URL}/listarNotaEstudianteCurso`, data);
    }
    rptNotaEstudianteMateria(data: any) {
        this.usuario = this.authService.usuario$.getValue();
        const criterio = {
            perid: this.usuario?.[0]?.perid,
            usuname: this.usuario?.[0]?.usuname
        };

        if (!criterio.perid || !criterio.usuname) {
            console.error('No se pudo obtener la información del usuario.');
            return;
        }

        this.spinner.show();
        this.http.post(`${API_URL}/rptNotaEstudianteMateria`, criterio, httpOptions)
            .subscribe(
                (data: any) => {
                    this.spinner.hide();
                    this.archivos.generateReportPDF(data, 'Reporte Nota');
                },
                (error) => {
                    this.spinner.hide();
                    console.error(error);
                    this.archivos.showToast();
                }
            );
    }


}