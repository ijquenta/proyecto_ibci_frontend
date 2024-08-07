import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    items: MenuItem[];

    constructor(public layoutService: LayoutService) {
     }

    ngOnInit() {

        this.model = [

            {
                label: 'Principal',
                icon: 'pi pi-fw pi-home',
                items: [
                    { label: 'Principal', icon: 'pi pi-fw pi-home', routerLink: ['principal/'], roles: ['Administrador', 'Secretaria', 'Estudiante', 'Docente', 'Invitado'] },
                    { label: 'Panel', icon: 'pi pi-fw pi-chart-pie', routerLink: ['panel/'], roles: ['Administrador', 'Secretaria'] }
                ],
            },
            {
                label: 'Usuario',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Usuarios',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Gestionar Personas',
                                icon: 'pi pi-fw pi-users',
                                routerLink: ['usuario/persona'],
                                roles: ['Administrador', 'Secretaria']
                            },
                            {
                                label: 'Gestionar Usuarios',
                                icon: 'pi pi-fw pi-users',
                                routerLink: ['usuario/crud'],
                                roles: ['Administrador', 'Secretaria']
                            },
                            {
                                label: 'Gestionar Roles',
                                icon: 'pi pi-fw pi-wrench',
                                routerLink: ['usuario/roles'],
                                roles: ['Administrador']
                            },
                            {
                                label: 'Gestionar Accesos',
                                icon: 'pi pi-fw pi-wrench',
                                routerLink: ['usuario/acceso'],
                                roles: ['Administrador']
                            },
                            {
                                label: 'Gestionar Permisos',
                                icon: 'pi pi-fw pi-wrench',
                                routerLink: ['usuario/permiso'],
                                roles: ['Administrador']
                            }
                        ],
                        roles: ['Administrador', 'Secretaria']
                    }
                ],
                roles: ['Administrador', 'Secretaria']

            },
            {
                label: 'Curso | Materia',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Materia',
                        icon: 'pi pi-fw pi-folder',
                        items: [
                            {
                                label: 'Gestionar Materias',
                                icon: 'pi pi-fw pi-folder-open',
                                routerLink: ['materia/crud'],
                                roles: ['Administrador', 'Secretaria']
                            },
                            // {
                            //     label: 'Reporte Materia',
                            //     icon: 'pi pi-fw pi-file-pdf',
                            //     routerLink: ['materia/reporte'],
                            //     roles: ['Administrador', 'Secretaria']
                            // },
                            {
                                label: 'Materias asignadas',
                                icon: 'pi pi-fw pi-file-pdf',
                                routerLink: ['materia/docente'],
                                roles: ['Docente']
                            },
                            {
                                label: 'Mis Materias',
                                icon: 'pi pi-fw pi-id-card',
                                routerLink: ['materia/estudiante'],
                                roles: ['Estudiante']
                            },

                        ],
                        roles: ['Administrador', 'Secretaria', 'Docente', 'Estudiante']
                    },
                    {
                        label: 'Nivel',
                        icon: 'pi pi-fw pi-circle-off',
                        items: [
                            {
                                label: 'Gestionar Niveles',
                                icon: 'pi pi-fw pi-folder-open',
                                routerLink: ['nivel/crud'],
                                roles: ['Administrador', 'Secretaria']
                            },
                            // {
                            //     label: 'Reporte Niveles',
                            //     icon: 'pi pi-fw pi-file-pdf',
                            //     routerLink: ['nivel/reporte']
                            // },
                        ],
                        roles: ['Administrador', 'Secretaria']
                    },
                    {
                        label: 'Curso',
                        icon: 'pi pi-fw pi-clone',
                        items: [
                            {
                                label: 'Gestionar Cursos',
                                icon: 'pi pi-fw pi-folder-open',
                                routerLink: ['curso/crud'],
                                roles: ['Administrador', 'Secretaria']
                            },
                            // {
                            //     label: 'Mis cursos',
                            //     icon: 'pi pi-fw pi-folder-open',
                            //     routerLink: ['curso/estudiante'],
                            //     roles: ['Estudiante']
                            // },
                            // {
                            //     label: 'Reporte Cursos',
                            //     icon: 'pi pi-fw pi-file-pdf',
                            //     routerLink: ['curso/reporte']
                            // },
                        ],
                        roles: ['Administrador', 'Secretaria']
                    }
                ],
                roles: ['Administrador', 'Secretaria', 'Docente', 'Estudiante']
            },
            {
                label: 'Estudiante | Nota',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Estudiantes',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Admisión',
                                icon: 'pi pi-fw pi-file-import',
                                routerLink: ['estudiante/admision'],
                                roles: ['Administrador', 'Secretaria'],
                                items: [
                                    {
                                        label: 'Gestionar Admisión',
                                        icon: 'pi pi-fw pi-file-import',
                                        routerLink: ['estudiante/admision'],
                                        roles: ['Administrador', 'Secretaria']
                                    },
                                    {
                                        label: 'Tipo Profesión',
                                        icon: 'pi pi-fw pi-list',
                                        routerLink: ['estudiante/admision/tipoProfesion'],
                                        roles: ['Administrador', 'Secretaria']
                                    },
                                    {
                                        label: 'Tipo Educación',
                                        icon: 'pi pi-fw pi-list',
                                        routerLink: ['estudiante/admision/tipoEducacion'],
                                        roles: ['Administrador', 'Secretaria']
                                    },
                                    {
                                        label: 'Tipo Cargo',
                                        icon: 'pi pi-fw pi-list',
                                        routerLink: ['estudiante/admision/tipoCargo'],
                                        roles: ['Administrador', 'Secretaria']
                                    }
                                ]

                            },
                            /*{
                                label: 'Gestionar Estudiantes',
                                icon: 'pi pi-fw pi-folder-open',
                                routerLink: ['estudiante/crud'],
                                roles: ['Administrador', 'Secretaria']
                            },
                            {
                                label: 'Reportes',
                                icon: 'pi pi-fw pi-file-pdf',
                                routerLink: ['estudiante/reporte'],
                                roles: ['Administrador', 'Secretaria']
                            }*/
                        ],
                        roles: ['Administrador', 'Secretaria']
                    },
                    // {
                    //     label: 'Asistencias',
                    //     icon: 'pi pi-fw pi-clock',
                    //     items: [
                    //         {
                    //             label: 'Gestionar Asistencias',
                    //             icon: 'pi pi-fw pi-folder-open',
                    //             routerLink: ['asistencia/crud'],
                    //             roles: ['Administrador', 'Secretaria']
                    //         },
                    //         {
                    //             label: 'Asignar asistencias',
                    //             icon: 'pi pi-fw pi-folder-open',
                    //             routerLink: ['asistencia/docente'],
                    //             roles: ['Docente']
                    //         },
                    //         {
                    //             label: 'Ver mis asistencias',
                    //             icon: 'pi pi-fw pi-folder-open',
                    //             routerLink: ['asistencia/estudiante'],
                    //             roles: ['Estudiante']
                    //         },
                    //         {
                    //             label: 'Reportes Asistencias',
                    //             icon: 'pi pi-fw pi-file-pdf',
                    //             routerLink: ['asistencia/reporte'],
                    //             roles: ['Administrador', 'Secretaria']
                    //         }
                    //     ],
                    //     roles: ['Administrador', 'Secretaria', 'Docente', 'Estudiante']
                    // },
                    {
                        label: 'Nota',
                        icon: 'pi pi-fw pi-star',
                        items: [
                            {
                                label: 'Gestionar Notas',
                                icon: 'pi pi-fw pi-folder-open',
                                routerLink: ['nota/crud'],
                                roles: ['Administrador', 'Secretaria']
                            },
                            {
                                label: 'Asignar Notas',
                                icon: 'pi pi-fw pi-pencil',
                                routerLink: ['nota/docente'],
                                roles: ['Docente']
                            },
                            {
                                label: 'Mis Notas',
                                icon: 'pi pi-fw pi-star',
                                routerLink: ['nota/estudiante'],
                                roles: ['Estudiante']
                            },
                            // {
                            //     label: 'Reportes Notas',
                            //     icon: 'pi pi-fw pi-file-pdf',
                            //     routerLink: ['nota/reporte'],
                            //     roles: ['Administrador', 'Secretaria']
                            // }
                        ],
                        roles: ['Administrador', 'Secretaria', 'Docente', 'Estudiante']
                    }
                ],
                roles: ['Administrador', 'Secretaria', 'Docente', 'Estudiante']
            },
            {
                label: 'Docentes',
                icon: 'pi pi-fw pi-users',
                items: [
                    {
                        label: 'Gestionar Docente',
                        icon: 'pi pi-fw pi-folder-open',
                        routerLink: ['docente/crud'],
                        roles: ['Administrador', 'Secretaria']
                    },
                    // {
                    //     label: 'Reportes Docentes',
                    //     icon: 'pi pi-fw pi-file-pdf',
                    //     routerLink: ['docente/reporte'],
                    //     roles: ['Administrador', 'Secretaria']
                    // }
                ],
                roles: ['Administrador', 'Secretaria']
            },
            {
                label: 'Inscripción y Matriculación',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Inscripción', icon: 'pi pi-fw pi-user-plus',
                        items: [
                            {
                                label: 'Inscripbir estudiante', icon: 'pi pi-fw pi-plus-circle', routerLink: ['inscripcion/crud'],
                                // items: [
                                //     { label: 'Administrar Inscripción', icon: 'pi pi-fw pi-user-plus', routerLink: ['inscripcion/crud'] },
                                    //{ label: 'Listar Incripciones', icon: 'pi pi-fw pi-users', routerLink: ['inscripcion/listar'] },
                                    //{ label: 'Verificar Incripción', icon: 'pi pi-fw pi-verified', routerLink: ['inscripcion/verificar']  },
                                // ],
                                roles: ['Administrador', 'Secretaria']
                            },
                            // {
                            //     label: 'Ver mis inscripciones',
                            //     icon: 'pi pi-fw pi-plus-circle',
                            //     routerLink: ['inscripcion/estudiante'],
                            //     roles: [ 'Estudiante']
                            // },
                            // {
                            //     label: 'Reporte Incripción', icon: 'pi pi-fw pi-file-edit',
                            //     items: [
                            //         { label: 'Reportes por Estudiante', icon: 'pi pi-fw pi-file-pdf', routerLink: ['inscripcion/reporteEstudiante']  },
                            //         { label: 'Reportes general', icon: 'pi pi-fw pi-file', routerLink: ['inscripcion/reportes']}
                            //     ]
                            // },

                        ],
                        roles: ['Administrador', 'Secretaria']
                    },
                    {
                        label: 'Matriculación', icon: 'pi pi-fw pi-check-square',
                        items: [
                            {
                                label: 'Administrar Matricula', icon: 'pi pi-fw pi-list', routerLink: ['matricula/listar'],
                                // items: [
                                    // { label: 'Nuevo Apertura Matricula', icon: 'pi pi-fw pi-plus', routerLink: ['matricula/nuevo'], roles: ['Administrador', 'Secretaria'] },
                                    // { label: 'Listar matriculas', icon: 'pi pi-fw pi-users', routerLink: ['matricula/listar'],  roles: ['Administrador', 'Secretaria']},

                                // ],
                                roles: ['Administrador', 'Secretaria']
                            },
                            {
                                label: 'Asignar Matricula', icon: 'fa-regular fa-address-card',
                                routerLink: ['matricula/asignar']
                                // items: [
                                //     { label: 'Reportes por Estudiante', icon: 'pi pi-fw pi-file-pdf', routerLink: ['inscripcion/reporteEstudiante']  },
                                //     { label: 'Reportes general', icon: 'pi pi-fw pi-file', routerLink: ['inscripcion/reportes']}
                                // ]
                            },
                            // {
                            //     label: 'Ver mis matriculas', icon: 'pi pi-fw pi-list',
                            //     items: [
                            //         // { label: 'Nuevo Apertura Matricula', icon: 'pi pi-fw pi-plus', routerLink: ['matricula/nuevo'], roles: ['Administrador'] },
                            //         { label: 'Ver mis matriculas',
                            //           icon: 'pi pi-fw pi-users',
                            //           routerLink: ['matricula/estudiante'],
                            //           roles: ['Estudiante']},
                            //     ],
                            //     roles: ['Estudiante']
                            // },
                            /*{
                                label: 'Reporte Matricula', icon: 'pi pi-fw pi-file-pdf',
                                items: [
                                    { label: 'Reportes', icon: 'pi pi-fw pi-file', routerLink: ['matricula/reporte'] },
                                ]
                            },*/
                        ],
                        roles: ['Administrador', 'Secretaria',]
                    }
                ],
                roles: ['Administrador', 'Secretaria']
            },
            {
                label: 'Material de Apoyo',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Material de Apoyo',
                        icon: 'pi pi-fw pi-book',
                        items: [
                            {
                                label: 'Gestionar Material',
                                icon: 'pi pi-fw pi-folder-open',
                                routerLink: ['material/crud'],
                                roles: ['Administrador', 'Secretaria', 'Docente']
                            },
                            {
                                label: 'Asignar Material',
                                icon: 'pi pi-fw pi-wrench',
                                routerLink: ['material/asignar'],
                                roles: ['Administrador', 'Secretaria', 'Docente']
                            },
                            // {
                            //     label: 'Reporte Material',
                            //     icon: 'pi pi-fw pi-file-pdf',
                            //     routerLink: ['material/reporte'],
                            //     roles: ['Administrador', 'Secretaria', 'Docente', 'Estudiante', 'Invitado']
                            // }
                        ],
                        roles: ['Administrador', 'Secretaria', 'Docente']
                    }
                ],
                roles: ['Administrador', 'Secretaria', 'Docente']
            },
            // {
            //     label: 'Pago',
            //     icon: 'pi pi-fw pi-briefcase',
            //     items: [
            //         {
            //             label: 'Pagos',
            //             icon: 'pi pi-fw pi-credit-card',
            //             items: [
            //                 {
            //                     label: 'Todos los pagos',
            //                     icon: 'pi pi-fw pi-money-bill',
            //                     routerLink: ['pago/'],
            //                     roles: ['Administrador', 'Secretaria'],
            //                     items: [
            //                         {
            //                             label: 'Registrar Pago',
            //                             icon: 'pi pi-fw pi-bell',
            //                             // routerLink: ['/usuario/crud']
            //                         },
            //                         {
            //                             label: 'Buscar Pago',
            //                             icon: 'pi pi-fw pi-bell',
            //                             // routerLink: ['/usuario/crud']
            //                         },

            //                     ]
            //                 },
            //                 {
            //                     label: 'Generar reporte de pago',
            //                     icon: 'pi pi-fw pi-money-bill',
            //                     routerLink: ['pago/'],
            //                     roles: ['Administrador', 'Secretaria'],
            //                     items: [
            //                         {
            //                             label: 'Generar reporte pago estudiante',
            //                             icon: 'pi pi-fw pi-bell',
            //                             // routerLink: ['/usuario/crud']
            //                         },
            //                         {
            //                             label: 'Generar reporte con filtros',
            //                             icon: 'pi pi-fw pi-bell',
            //                             // routerLink: ['/usuario/crud']
            //                         },
            //                         {
            //                             label: 'Reportes de control',
            //                             icon: 'pi pi-fw pi-bell',
            //                             // routerLink: ['/usuario/crud']
            //                         },

            //                     ]
            //                 },
            //                 {
            //                     label: 'Pagos por materia',
            //                     icon: 'pi pi-fw pi-money-bill',
            //                     routerLink: ['pago/'],
            //                     roles: ['Administrador', 'Secretaria']
            //                 },
            //                 {
            //                     label: 'Detalle de pago',
            //                     icon: 'pi pi-fw pi-money-bill',
            //                     routerLink: ['pago/'],
            //                     roles: ['Administrador', 'Secretaria']
            //                 },
            //                 {
            //                     label: 'Historial de pago',
            //                     icon: 'pi pi-fw pi-money-bill',
            //                     routerLink: ['pago/'],
            //                     roles: ['Administrador', 'Secretaria']
            //                 },
            //                 // {
            //                 //     label: 'Reportes Pagos',
            //                 //     icon: 'pi pi-fw pi-file-pdf',
            //                 //     routerLink: ['pago/reporte'],
            //                 //     roles: ['Administrador', 'Secretaria']
            //                 // },
            //                 // {
            //                 //     label: 'Notificación de pago',
            //                 //     icon: 'pi pi-fw pi-bell',
            //                 //     routerLink: ['pago/notificacion'],
            //                 //     roles: ['Administrador', 'Secretaria']
            //                 // },
            //                 {
            //                     label: 'Mis pagos',
            //                     icon: 'pi pi-fw pi-money-bill',
            //                     routerLink: ['pago/estudiante'],
            //                     roles: ['Estudiante']
            //                 }
            //             ],
            //             roles: ['Administrador', 'Secretaria', 'Estudiante']
            //         },
            //         // {
            //         //     label: 'Notificación de pago',
            //         //     icon: 'pi pi-fw pi-bell',
            //         //     items: [
            //         //         {
            //         //             label: 'Envio de mensaje',
            //         //             icon: 'pi pi-fw pi-bell',
            //         //             // routerLink: ['/usuario/crud']
            //         //         },
            //         //     ]
            //         // }
            //     ],
            //     roles: ['Administrador', 'Secretaria', 'Estudiante']
            // },


            {
                "label": "Pago",
                "icon": "pi pi-fw pi-briefcase",
                "items": [
                    {
                        "label": "Gestión de Pagos",
                        "icon": "pi pi-fw pi-credit-card",
                        "roles": ["Administrador", "Secretaria"],
                        "items": [
                            {
                                "label": "Todos los Pagos",
                                "icon": "pi pi-fw pi-money-bill",
                                "routerLink": ["pago/todos"],
                                "roles": ["Administrador", "Secretaria"]
                            },
                            /*{
                                "label": "Registrar Pago",
                                "icon": "pi pi-fw pi-plus",
                                "routerLink": ["pago/registrar"],
                                "roles": ["Administrador", "Secretaria"]
                            },
                            {
                                "label": "Buscar Pago",
                                "icon": "pi pi-fw pi-search",
                                "routerLink": ["pago/buscar"],
                                "roles": ["Administrador", "Secretaria"]
                            },
                            {
                                "label": "Pagos por Materia",
                                "icon": "pi pi-fw pi-book",
                                "routerLink": ["pago/materia"],
                                "roles": ["Administrador", "Secretaria"]
                            },
                            {
                                "label": "Detalle de Pago",
                                "icon": "pi pi-fw pi-info-circle",
                                "routerLink": ["pago/detalle"],
                                "roles": ["Administrador", "Secretaria"]
                            },
                            {
                                "label": "Historial de Pagos",
                                "icon": "pi pi-fw pi-history",
                                "routerLink": ["pago/historial"],
                                "roles": ["Administrador", "Secretaria"]
                            }*/
                        ]
                    },
                    /*{
                        "label": "Reportes",
                        "icon": "pi pi-fw pi-file",
                        "roles": ["Administrador", "Secretaria"],
                        "items": [
                            {
                                "label": "Reporte de Pago Estudiante",
                                "icon": "pi pi-fw pi-chart-line",
                                "routerLink": ["pago/reportes/estudiante"],
                                "roles": ["Administrador", "Secretaria"]
                            },
                            {
                                "label": "Reporte con Filtros",
                                "icon": "pi pi-fw pi-filter",
                                "routerLink": ["pago/reportes/filtros"],
                                "roles": ["Administrador", "Secretaria"]
                            },
                            {
                                "label": "Reportes de Control",
                                "icon": "pi pi-fw pi-calendar",
                                "routerLink": ["pago/reportes/control"],
                                "roles": ["Administrador", "Secretaria"]
                            }
                        ]
                    },*/

                ]
            },

            // {
            //     label: 'Notificaciones',
            //     icon: 'pi pi-fw pi-briefcase',
            //     items: [
            //         {
            //             label: 'Mensajes',
            //             icon: 'pi pi-fw pi-credit-card',
            //             items: [
            //                 {
            //                     label: 'Ver mensajes',
            //                     icon: 'pi pi-fw pi-money-bill',
            //                     routerLink: ['mensaje/crud'],
            //                     roles: ['Administrador', 'Secretaria', 'Docente', 'Estudiante']
            //                 },
            //             ],
            //             roles: ['Administrador', 'Secretaria', 'Docente', 'Estudiante']
            //         },
            //     ],
            //     roles: ['Administrador', 'Secretaria', 'Docente', 'Estudiante']
            // },


            {
                label: 'Contabilidad',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Contabilidad',
                        icon: 'pi pi-fw pi-credit-card',
                        items: [
                            {
                                label: 'Gestionar Contabilidad',
                                icon: 'pi pi-fw pi-money-bill',
                                routerLink: ['contabilidad/gestionar'],
                                roles: ['Administrador', 'Secretaria']
                            },
                        ],
                        roles: ['Administrador', 'Secretaria']
                    },
                ],
                roles: ['Administrador', 'Secretaria']
            },
        ];
    }








}
