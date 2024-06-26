import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from '../notfound/notfound.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'crud', loadChildren: () => import('./estudiante-crud/estudiante-crud.module').then(m => m.EstudianteCrudModule) },
        { path: 'reporte', loadChildren: () => import('./estudiante-reporte/estudiante-reporte.module').then(m => m.EstudianteReporteModule) },
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
export class EstudianteRoutingModule { }
