import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
// import { ReporteRoutingModule } from './reporte/reporte-routing.module';
// import { EmptyDemoComponent } from '../estudiante/empty/emptydemo.component';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        UsuarioRoutingModule,
        // ReporteRoutingModule,
        // EmptyDemoComponent
    ],
    providers: [MessageService]
})
export class UsuarioModule { }
