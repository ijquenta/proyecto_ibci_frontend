import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MatriculaService } from 'src/app/modules/service/data/matricula.service';
import { Matricula } from 'src/app/modules/models/matricula';
import { TipoEstadoMatricula } from 'src/app/modules/models/diccionario';
import { Table } from 'primeng/table';
import { NgxSpinnerService } from 'ngx-spinner';
// --------------- Modelo Usuario
import { Usuario } from 'src/app/modules/models/usuario';

// --------------- Importación de Autenticación
import { AuthService } from 'src/app/services/auth.service';
@Component({
    templateUrl: './matricula-listar.component.html',
    providers: [MessageService]
})
export class MatriculaListarComponent implements OnInit {


      //-----------------Variables-------------------//
        listaMatriculas: Matricula[] = [];
        listaMatriculasDesactivadas: Matricula[] = [];
        listaMatriculasDuplicated: Matricula[] = [];
        matricula: Matricula = {};
        gestiones: number[] = [];
        gestionSeleccionado: number;
    //   submitted: boolean = false;
        matriculaDialog: boolean = false;
        eliminarMatriculaDialog: boolean = false;
        activarMatriculaDialog: boolean = false;
        desactivarMatriculaDialog: boolean = false;
    //   tipoModulo: TipoModulo[] = [];
    //   tipoModuloSeleccionado: TipoModulo;
        fechaInicio: Date;
        fechaFinal: Date;
        costo: number;
        tipoEstadoMatricula: TipoEstadoMatricula[] = [];
        tipoEstadoMatriculaSeleccionado: TipoEstadoMatricula;
    //   registroMateria: Materia = {};
    //   pip = new DatePipe('es-BO');
        opcionMatricula: boolean = false;
        usuario: Usuario;
      //-----------------Variables-------------------//s

    constructor(
                // private productService: ProductService,
                private messageService: MessageService,
                private matriculaService: MatriculaService,
                private spinner: NgxSpinnerService,
                private authService: AuthService,
                // private usuarioService: UsuarioService,
                // public reporte: ReporteService,
                ) { }

    ngOnInit() {
        this.listarMatriculas()
        this.gestionSeleccionado = new Date().getFullYear() + 1;
        for (let anio = this.gestionSeleccionado; anio >= 2018; anio--) {
            this.gestiones.push(anio);
        }
        this.tipoEstadoMatricula = [
            new TipoEstadoMatricula(0, 'CERRADO'),
            new TipoEstadoMatricula(1, 'ABIERTO')
        ]

        // Método de getPerfil() de usuario logeado
        this.getPerfilUsuario();
    }

    getPerfilUsuario() {
        this.authService.getPerfil().subscribe(usuario => {
            this.usuario = usuario[0];
        });
    }


    listarMatriculas(){
        this.spinner.show();
        this.matriculaService.listarMatricula().subscribe(
            (result: any) => {
                this.listaMatriculas = result;
                console.log("Matriculas", this.listaMatriculas)
                this.listaMatriculasDuplicated = this.listaMatriculas;
                this.listaMatriculasDesactivadas = this.listaMatriculas.filter(matricula => matricula.matrestado === 0);
                this.listaMatriculas = this.listaMatriculas.filter(matricula => matricula.matrestado === 1);
                this.spinner.hide();
            },
            (error: any) => {
                console.error(error);
                this.spinner.hide();
            }
        )
    }

    abrirNuevo() {
        this.matricula = {};
        this.gestionSeleccionado = 0;
        this.matriculaDialog = true;
        this.tipoEstadoMatriculaSeleccionado = new TipoEstadoMatricula(0, "");
        this.opcionMatricula = true;
        this.fechaInicio = null;
        this.fechaFinal = null;
        this.costo = null;
    }

    ocultarDialog() {
        this.matriculaDialog = false;
        this.opcionMatricula = false;
        this.messageService.add({ severity: 'warn', summary: 'Cancelado', detail: 'Proceso Cancelado', life: 3000 });
    }
                // matrgestion?: number = 0;
                // matrestadodescripcion?: string = '';
                // matrfchini?: Date | null;
                // matrfchfin?: Date | null;
                // matrcos?: number = 0;
                // matrusureg?: string = '';
                // matrfecreg?: Date | null;
                // matrusumod?: string = '';
                // matrfecmod?: Date | null;
                // matrestado?: number = 0;
    obtenerBody(){
        // console.log("Obtener Body: ", this.matricula);
        // this.matricula.matrgestion = thi;
        this.matricula.matrestado = 1;
        this.matricula.matrestadodescripcion = this.tipoEstadoMatriculaSeleccionado.matrestadodescripcion;
        this.matricula.matrfchini = this.fechaInicio;
        this.matricula.matrfchfin = this.fechaFinal;
        this.matricula.matrusureg = 'Usuario Reg';
        this.matricula.matrcos = this.costo;

        console.log("Matricula LLena: ", this.matricula);
        const body = {...this.matricula}
        return body;
    }
    setData(){
        console.log(this.matricula);
        this.tipoEstadoMatriculaSeleccionado = new TipoEstadoMatricula(this.matricula.matrestado, this.matricula.matrestadodescripcion);
        this.fechaInicio = new Date(this.matricula.matrfchini);
        this.fechaFinal = new Date(this.matricula.matrfchfin);
        this.costo = this.matricula.matrcos;
        this.gestionSeleccionado = this.matricula.matrgestion;
        this.matricula.matrusumod = "ijquenta";
        this.matricula.matrestadodescripcion = null;
        console.log("Nombre matricula", this.matricula)
    }
    editarMatricula(data: any) {
        this.matricula = { ...data };
        this.setData();
        this.matriculaDialog = true;
        this.opcionMatricula = false;
    }
    guardarMatricula(){
        this.obtenerBody();
        console.log("GuardarMatricual", this.matricula);
        if(this.opcionMatricula){
            this.matriculaService.insertarMatricula(this.matricula).subscribe(
                (result: any) => {
                    this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Matricula Agregado', life: 3000 });
                    this.listarMatriculas();
                    this.matriculaDialog = false;
                    this.opcionMatricula = false;
                },
                error => {
                console.log("error",error);
                    this.messageService.add({severity:'warn', summary:'Error', detail:'Algo salio mal, al insertar la matricula', life: 3000});
                }
            );
        }
        else{
            console.log("Editar", this.matricula);
            this.matriculaService.modificarMatricula(this.matricula).subscribe(
                (result: any) => {
                    this.messageService.add({ severity: 'success', summary: 'Exitosamente', detail: 'Matricula Modificado', life: 3000 });
                    this.listarMatriculas();
                    this.matriculaDialog = false;
                    this.opcionMatricula = false;
                },
                error => {
                console.log("error",error);
                    this.messageService.add({severity:'warn', summary:'Error', detail:'Algo salio mal, al modificar la matricula'});
                }
            );
        }
    }

    eliminarMatricula(data: Matricula) {
        this.eliminarMatriculaDialog = true;
        this.matricula = { ...data };
        console.log("Matricula Eliminar:", this.matricula);
    }

    activarMatricula(data: Matricula) {
        this.activarMatriculaDialog = true;
        this.matricula = { ...data };
        this.matricula.tipo = 3;
        console.log("Matricula Activar:", this.matricula);
    }

    desactivarMatricula(data: Matricula) {
        this.desactivarMatriculaDialog = true;
        this.matricula = { ...data };
        this.matricula.tipo = 2;
        console.log("Matricula Desactivar:", this.matricula);
    }

    confirmarEliminar() {
        console.log("confirmarEliminar: ", this.matricula)
        this.matricula.matrusumod = this.usuario.usuname;
        this.matriculaService.eliminarMatricula(this.matricula).subscribe(
            (result: any) => {
                this.messageService.add({ severity: 'success', summary: 'Exitosa!', detail: 'Estado de la matricula modificada correctamente', life: 3000 });
                this.listarMatriculas();
                this.matricula = new Matricula();
                this.eliminarMatriculaDialog = false;
                this.matricula = {};
            },
            error => {
            console.log("error",error);
            const descripcionError = error.error.message;
                this.messageService.add({severity:'warn', summary:'Error', detail: descripcionError, life: 5000});
            }
        );
    }

    confirmarActivarDesactivar() {
        console.log("confirmarActivarDesactivar: ", this.matricula)
        console.log("confirmarEliminar: ", this.matricula)
        this.matricula.matrusumod = this.usuario.usuname;
        this.matriculaService.gestionarMatriculaEstado(this.matricula).subscribe(
            (result: any) => {
                this.messageService.add({ severity: 'success', summary: 'Exitosa!', detail: 'Estado de la matricula modificada correctamente', life: 3000 });
                this.listarMatriculas();
                this.eliminarMatriculaDialog = false;
                this.activarMatriculaDialog = false;
                this.desactivarMatriculaDialog = false;
                this.matricula = new Matricula();
            },
            error => {
            console.log("error",error);
                // const descripcionError = error.error.message;
                // this.messageService.add({severity:'warn', summary:'Error', detail: descripcionError, life: 5000});
                this.messageService.add({severity:'warn', summary:'Error', detail: 'Algo salio mal.', life: 5000});
            }
        );
    }


    obtenerSeverityEstado(estado: number): string {
        switch (estado) {
            case 1:
                return 'success';
            case 0:
                return 'danger';
            default:
                return 'info';
        }
    }

    obtenerDescripcionEstado(estado: number): string {
        switch (estado) {
            case 1:
                return 'Activo';
            case 0:
                return 'Inactivo';
            default:
                return 'Ninguno';
        }
    }
    // Método de busqueda en la tabla
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal(
            (event.target as HTMLInputElement).value,
            'contains'
        );
    }
}
