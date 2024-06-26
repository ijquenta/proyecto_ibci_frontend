import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from '../notfound/notfound.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'crud', loadChildren: () => import('./inscripcion-crud/inscripcion-crud.module').then(m => m.InscripcionCrudModule) },
        { path: 'listar', loadChildren: () => import('./inscripcion-listar/inscripcion-listar.module').then(m => m.InscripcionListarModule) },
        { path: 'verificar', loadChildren: () => import('./inscripcion-verificar/inscripcion-verificar.module').then(m => m.InscripcionVerificarModule) },
        { path: 'reporteEstudiante', loadChildren: () => import('./inscripcion-reporte-estudiante/inscripcion-reporte-estudiante.module').then(m => m.InscripcionRerporteEstudianteModule) },
        { path: 'reportes', loadChildren: () => import('./inscripcion-reportes/inscripcion-reportes.module').then(m => m.InscripcionRerportesModule) },
        { path: 'estudiante', loadChildren: () => import('./inscripcion-estudiante/inscripcion-estudiante.module').then(m => m.InscripcionEstudianteModule) },
        // { path: 'reportes', loadChildren: () => import('./inscripcion-reporte/nota-reporte.module').then(m => m.NotaReporteModule) },
        // { path: 'timeline', loadChildren: () => import('./timeline/timelinedemo.module').then(m => m.TimelineDemoModule) },
        {
            path: 'notfound',
            component: NotfoundComponent
        },
        {
           path: '**',
           redirectTo: 'notfound',
        }
    ])],
    exports: [RouterModule]
})
export class InscripcionRoutingModule { }
