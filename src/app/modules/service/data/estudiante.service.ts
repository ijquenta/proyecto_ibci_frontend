import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../api/product';
import { API_URL } from 'src/environments/environment';
import { Usuario } from '../../models/usuario';
import { Rol } from '../../models/rol';
import { TokenService } from 'src/app/services/token.service';
import { checktoken } from 'src/app/interceptors/token.interceptor';

@Injectable({
    providedIn: 'root',
})
export class EstudianteService {

    constructor(private http: HttpClient, private tokenService: TokenService) { }


    gestionarPersona(criterio: any){
        return this.http.post(`${API_URL}/gestionarPersona`, criterio);
    }

    obtenerMateriasInscritas(criterio: any){
        return this.http.post(`${API_URL}/obtenerMateriasInscritas`, criterio);
    }


    registrarPersona(criterio: any){
        // console.log("Datos a registarPersona: ", criterio);
        return this.http.post(`${API_URL}/registrarPersona`, criterio);
    }

    getUsuario(){
        return this.http.get(`${API_URL}/listaUsuarios`);
    }

    getRoles(){
        return this.http.get(`${API_URL}/tipoRol`);
    }

    crearRol(criterio: any){
        return this.http.post(`${API_URL}/crearRol`, criterio);
    }

    modificarRol(criterio: any){
        let registroModRol = new Rol();
        return this.http.post(`${API_URL}/modificarRol`, registroModRol);
    }
    eliminarRol(criterio: any){
        return this.http.post(`${API_URL}/eliminarRol`, criterio);
    }
    ListarPersona(){
        return this.http.get(`${API_URL}/listarPersona`, {
            context: checktoken()
        });
    }
    getTipoDocumento(){
      return this.http.get(`${API_URL}/tipoDocumento`)
    }
    getTipoEstadoCivil(){
      return this.http.get(`${API_URL}/tipoEstadoCivil`)
    }
    getTipoGenero(){
      return this.http.get(`${API_URL}/tipoGenero`)
    }
    getTipoPais(){
      return this.http.get(`${API_URL}/tipoPais`)
    }
    getTipoCiudad(){
      return this.http.get(`${API_URL}/tipoCiudad`)
    }

    listarEstudiante(){
        return this.http.get(`${API_URL}/listarEstudiante`)
    }


}
