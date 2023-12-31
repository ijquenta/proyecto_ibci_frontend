import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'crud', loadChildren: () => import('./curso-crud/curso-crud.module').then(m => m.CursoCrudModule) },
        { path: 'reporte', loadChildren: () => import('./reporte/reporte.module').then(m => m.CursoReporteModule) },
        { path: 'estudiante', loadChildren: () => import('./curso-estudiante/curso-estudiante.module').then(m => m.CursoEstudianteModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class CursoRoutingModule { }
