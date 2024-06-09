import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { catchError, forkJoin, of } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';

// Models
import { Usuario } from 'src/app/modules/models/usuario';
import { Permiso } from 'src/app/modules/models/permiso';
import { TipoRol, TipoOperacion } from 'src/app/modules/models/diccionario';
import { Operacion } from 'src/app/modules/models/operacion';

// Services
import { UsuarioService } from 'src/app/modules/service/data/usuario.service';
import { AuthService } from 'src/app/services/auth.service';
import { PermisoService } from 'src/app/modules/service/data/permiso.service';
import { RolService } from 'src/app/modules/service/data/rol.service';
import { OperacionService } from 'src/app/modules/service/data/operacion.service';


interface Column {
    field: string;
    header: string;
}
@Component({
    selector: 'usuario-permiso-component',
    templateUrl: './usuario-permiso.component.html',
    providers: [MessageService],
    styleUrls: ['./usuario-permiso.component.css']
})
export class UsuarioPermisoComponent implements OnInit {

    items: MenuItem[] | undefined;
    home: MenuItem | undefined;

    usuario = new Usuario;

    // modal
    dialogPermiso: boolean;
    visible: boolean = false;
    deletePermisoDialog: boolean = false;

    // Variables
    operaciones: any[];
    roles: any[];
    permisos: Permiso[] = [];
    permiso: Permiso;
    tipoRol: TipoRol[] = [];
    tipoOperacion: TipoOperacion[] = [];
    tipoOperacionRespaldo: TipoOperacion[] = [];
    response: any[];
    count: any;
    position: any;

    // Validation
    permisoForm: FormGroup;

    stateOptionsEstado: any[] = [
        { label: 'Habilitado', value: 1 },
        { label: 'Inabilitado', value: 0 }
    ];

    stateOptionsActivo: any[] = [
        { label: 'Activo', value: 1 },
        { label: 'Inactivo', value: 0 }
    ]
    

    // Operation Variable
    manageOperationDialog: boolean;
    operations: Operacion[] = [];
    loading: boolean = false;
    status!: Column[];
    selectedStatus!: Column[];
    operationForm: FormGroup;
    dialogOperation: boolean = false;
    operation: Operacion;
    optionOperation: boolean = false; // true->create, false->update
    dialogOperationDelete: boolean = false;

    constructor(
        public usuarioService: UsuarioService,
        private messageService: MessageService,
        public rolService: RolService,
        private authService: AuthService,
        public permisoService: PermisoService,
        private formBuilder: FormBuilder,
        private operacionService: OperacionService,
        private confirmationService: ConfirmationService,
        private spinner: NgxSpinnerService
    ) { }

    ngOnInit() {

        this.items = [{ label: 'Usuarios'}, { label: 'Gestionar Permisos', routerLink:''},];
        this.home = { icon: 'pi pi-home', routerLink: '/' };

        this.getDataUser();

        this.getDataOperaciones();

        this.getDataRoles();

        this.getDataPermisos();

        this.getDataTipoRol();

        this.getDataTipoOperacion();

        this.permisoForm = this.formBuilder.group({
            permid: [''],
            tipoRol: ['', [Validators.required]],
            tipoOperacion: ['', [Validators.required]],
            permactivo: ['', [Validators.required]],
            permusureg: [''],
            permdescripcion: [''],
            permestado: ['', [Validators.required]]
        })

        // Operation Section
        this.status = [
            { field: 'activos', header: 'Activos' },
            { field: 'inactivos', header: 'Inactivos' }
        ];

        this.selectedStatus = this.status;

        this.operationForm = this.formBuilder.group({
            opeid: [''],
            openombre: ['', [Validators.required]],
            opeusureg: [''],
            opeusumod: [''],
            opedescripcion: [''],
            opeestado: ['', [Validators.required]]
        })

    }

    getDataUser(){
        this.authService.usuario$.subscribe((user => {
            if (user) {
                if (Array.isArray(user) && user.length > 0) {
                    this.usuario = user[0];
                }
            }
        }));
    }

    getOperations() {
        this.operacionService.getOperations().subscribe({
          next: (data: Operacion[]) => {
            this.operations = data;
          },
          error: (error) => {
            console.error('Error in getOperations', error);
          },
          complete: () => {
            console.log("Operations: ", this.operations);
          }
        });
    }

    getDataTipoOperacion() {
        this.operacionService.getTipoOperacion().subscribe({
            next: (data) => {
                this.tipoOperacion = data as TipoOperacion[];
            },
            error: (error) => {
                console.error('Error in getTipoOperacion', error);
            },
            complete: () => {
                console.log("tipoOperacion: ", this.tipoOperacion)
                console.log('Operación de obtención de tipos de operación completada.');
            }
        });
    }
    

    getDataTipoRol() {
        this.rolService.getTipoRol().subscribe({
            next: (data) => {
                this.tipoRol = data as TipoRol[];
            },
            error: (error) => {
                console.error('Error in getTipoRol', error);
            },
            complete: () => {
                console.log("tipoRol: ", this.tipoRol)
                console.log('Operación de obtención de tipos de rol completada.');
            }
        });
    }

    getDataPermisos() {
        this.spinner.show();
        this.permisoService.getPermisos().subscribe({
            next: (data: Permiso[]) => {
                this.permisos = data;
            },
            error: (error: any) => {
                this.spinner.hide();
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al obtener permisos' });
                console.error('Error in getDataPermisos', error);
            },
            complete: () => {
                this.spinner.hide();
                console.log('Permisos obtenidos correctamente.');
            }
        })
    }

    getDataRoles() {
        this.permisoService.getRoles().subscribe({
            next: (data) => {
                this.roles = data as any[];
            },
            error: (error) => {
                console.error('Error al listar roles', error);
            },
            complete: () => {
                console.log('Roles obtenidos correctamente.');
            }
        })
    }

    getDataOperaciones() {
        this.permisoService.getOperaciones().subscribe({
            next: (data) => {
                this.operaciones = data as any[];
            },
            error: (error) => {
                console.error('Error al listar operaciones', error);
            },
            complete: () => {
                console.log('Operaciones obtenidas correctamente.');
            }
        })
    }

    getPermisosPorRol(rolId: number) {
        if (this.permisos) {
            return this.permisos.filter(permiso => permiso.rolid === rolId);
        } else {
            return [];
        }
    }

    togglePermiso(permiso: Permiso): void {
        permiso.permusumod = this.usuario.usuname;
        this.permisoService.updatePermiso(permiso).subscribe({
            next: (data) => {
                console.log("Update Permiso: ", data);
            },
            error: (error) => {
                console.error('Error al actualizar permiso', error);
            },
            complete: () => {
                this.messageService.add({ severity: 'success', summary: 'Permiso', detail: 'Actualizado correcto.', life: 3000 });
            } 
        })
    }

    getOperacionPorId(opeId: number) {
        return this.operaciones.find(operacion => operacion?.opeid === opeId);
    }

    ListarRoles() {
        this.rolService.getListarRoles().subscribe((data: any) => {
            this.roles = data;
        });
    }

    addPermiso() {
        this.permisoForm.reset();
        this.dialogPermiso = true;

    }

    hideDialogPermiso() {
        this.permisoForm.reset();
        this.dialogPermiso = false;
    }

    sendFormPermiso() {
        if (this.permisoForm.invalid) {
            Object.values(this.permisoForm.controls).forEach(control => {
                control.markAsTouched();
                control.markAsDirty();
            });
            return;
        }

        this.permiso = new Permiso();
        this.permiso.rolid = this.permisoForm.value.tipoRol.rolid;
        this.permiso.permactivo = this.permisoForm.value.permactivo ? 1 : 0;
        this.permiso.permestado = this.permisoForm.value.permestado;
        this.permiso.permusureg = this.usuario.usuname;
        this.permiso.permdescripcion = this.permisoForm.value.permdescripcion;

        const operaciones = this.permisoForm.value.tipoOperacion;

        if (!Array.isArray(operaciones) || operaciones.length === 0) {
            console.error('tipoOperacion no es un array o está vacío');
            return;
        }

        const requests = operaciones.map(operacion => {
            const permisoData: Permiso = {
                ...this.permiso,
                opeid: operacion.opeid
            };
            return this.permisoService.addPermiso(permisoData).pipe(
                catchError(error => {
                    if (error.error && error.error.message.includes('UniqueViolation')) {
                        return of({ error: true, message: 'Duplicated error'});
                    }
                    else{
                        throw error;
                    }
                })
            );
        });

        forkJoin(requests).subscribe(
            (responses: any[]) => {
                let count = 0;
                responses.forEach(response=> {
                    if (response.error) {
                        count++;
                    }
                });
                this.count = count;
                this.visible = false;
                this.dialogPermiso = false;
                if (count > 0) {
                    this.messageService.add({ severity: 'info', summary: 'Permiso', detail: 'Ya se encuentra registrados: ' + count + ' registros', life: 3000 });
                }
                this.messageService.add({ severity: 'success', summary: 'Permiso', detail: 'Adicionados correctamente.', life: 3000 });
                this.getDataOperaciones();
                this.getDataPermisos();
                this.getDataRoles();
            },
            (error: any) => {
                console.error('Error adicionando permisos:', error);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error adicionando permisos.', life: 3000 });
            }
        );
    }

    handleClickPermiso(permiso: any) {
        console.log('Clicked: ', permiso);
        this.permiso = permiso;
        this.deletePermisoDialog = true;
    }

    confirm(event: Event) {
        console.log('Confirm: ', event);
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Estas seguro de continuar con este proceso?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Permiso', detail: 'Eliminado' });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Operación', detail: 'Cancelado' });
            }
        });
    }

    deletePermiso(){
        this.spinner.show();
        this.permisoService.deletePermiso(this.permiso).subscribe({
            next: (data) => {
                console.log('Delete completed: ', data);
            },
            error: (error) => {
                this.spinner.hide();
                console.error('Error eliminando permiso:', error);
            },
            complete: () => {
                this.spinner.hide();
                this.messageService.add({ severity: 'success', summary: 'Permiso', detail: 'Eliminado correcto.', life: 3000 });
                this.deletePermisoDialog = false;
                this.getDataOperaciones();
                this.getDataPermisos();
                this.getDataRoles();
            }

        })
    }

    // Manage Operations
    manageOperations() {

        this.manageOperationDialog = true;

        this.getOperations();
        
    }
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal(
            (event.target as HTMLInputElement).value,
            'contains'
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

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.operations.length; i++) {
            if (this.operations[i].openombre === id) {
                index = i;
                break;
            }
        }
        return index;
    }

    OperationCreate(){
        this.operationForm.reset();
        this.dialogOperation = true;
        this.optionOperation = true;
    }

    sendFormOperation() {
        if (this.operationForm.invalid) {
            Object.values(this.operationForm.controls).forEach(control => {
                control.markAsTouched();
                control.markAsDirty();
            });
            return;
        }

        this.operation = new Operacion();
        this.operation.openombre = this.operationForm.value.openombre;
        this.operation.opeestado = this.operationForm.value.opeestado;
        this.operation.opeusureg = this.usuario.usuname;
        this.operation.opedescripcion = this.operationForm.value.opedescripcion;
        this.loading = true;
        if(this.optionOperation){
            console.log("Send Data Create Operation: ", this.operation);
            this.operacionService.createOperation(this.operation).subscribe({
                next: (data) => {
                    console.log("createOperation: ",data);
                },
                error: (error) => {
                    this.messageService.add({ severity: 'error', summary: 'Operación', detail: 'Creación incorrecta, intente nuevamente mas tarde.', life: 3000 });
                    console.error('Error in createOperation: ', error);
                    this.loading = false;
                },
                complete: () => {
                    this.messageService.add({ severity: 'success', summary: 'Operación', detail: 'Creación correcta.', life: 3000 });
                    this.loading = false;
                    this.dialogOperation = false;
                    this.optionOperation = false;
                    this.operationForm.reset();
                    this.getOperations();
                }
            });
        }
        else {
            this.operation.opeid = this.operationForm.value.opeid;
            this.operation.opeusumod = this.usuario.usuname;
            console.log("Send Data Update Operation: ", this.operation);
            this.operacionService.updateOperation(this.operation.opeid, this.operation).subscribe({
                next: (data) => {
                    console.log("updateOperation: ",data);
                },
                error: (error) => {
                    this.messageService.add({ severity: 'error', summary: 'Operación', detail: 'Modificación incorrecta, intente nuevamente mas tarde.', life: 3000 });
                    console.error('Error in updateOperation: ', error);
                    this.loading = false;
                },
                complete: () => {
                    this.messageService.add({ severity: 'success', summary: 'Operación', detail: 'Modificación correcta.', life: 3000 });
                    this.loading = false;
                    this.dialogOperation = false;
                    this.optionOperation = false;
                    this.operationForm.reset();
                    this.getOperations();
                }
            });
        }
    }

    hideDialogOperation(){
        this.operationForm.reset();
        this.dialogOperation = false;
    }

    OperationUpdate(operation: Operacion){
        this.dialogOperation = true;
        this.optionOperation = false;
        console.log("Data OperationUpdate: ", operation)
        this.operationForm.patchValue({
            opeid: operation.opeid,
            openombre: operation.openombre,
            opedescripcion: operation.opedescripcion,
            opeestado: operation.opeestado
        })
    }

    OperationDelete(operation: Operacion){
        console.log("OperationDelete: ", operation);
        this.dialogOperationDelete = true;
        this.operation = {
            ...operation
        }
        
    }

    SendOperationDelete(){
        console.log("SendOperationDelete: ", this.operation)
        this.operacionService.deleteOperation(this.operation.opeid).subscribe({
            next: (data) => {
                console.log("deleteOperation: ", data)
            },
            error: (error) => {
                this.messageService.add({ severity: 'error', summary: 'Operación', detail: 'Eliminado incorrecta, intente nuevamente mas tarde.', life: 3000 });
                console.error('Error in deleteOperation: ', error);
                this.loading = false;
            },
            complete: () => {
                this.messageService.add({ severity: 'success', summary: 'Operación', detail: 'Eliminado correcto.', life: 3000 });
                this.loading = false;
                this.dialogOperationDelete = false;
                this.getOperations();
            }
        } );
    }
}
