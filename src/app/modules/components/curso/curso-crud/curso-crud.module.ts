import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CursoCrudRoutingModule } from './curso-crud-routing.module';
import { CursoCrudComponent } from './curso-crud.component';
import { CursoHorarioComponent } from './curso-horario/curso-horario.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { UsuarioService } from '../../../service/data/usuario.service';
import { ReporteService } from 'src/app/modules/service/data/reporte.service';
import { CursoService } from 'src/app/modules/service/data/curso.service';
import { AvatarModule } from 'primeng/avatar';
import { CalendarModule } from 'primeng/calendar';
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ImageModule } from 'primeng/image';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MultiSelectModule } from "primeng/multiselect";
import { SidebarModule } from 'primeng/sidebar';
import { HorarioService } from 'src/app/modules/service/data/horario.service';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TabViewModule } from 'primeng/tabview';
@NgModule({
    imports: [
        TabViewModule,
        FullCalendarModule,
        SidebarModule,
        MultiSelectModule,
        BreadcrumbModule,
        ImageModule,
        OverlayPanelModule,
        SelectButtonModule,
        CommonModule,
        CursoCrudRoutingModule,
        TableModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        InputNumberModule,
        DialogModule,
        CalendarModule,
        TagModule,
        ChipModule,
        CardModule,
        DividerModule,
        PanelModule,
        TooltipModule,
        ReactiveFormsModule,
        AvatarModule
    ],
    declarations: [CursoCrudComponent, CursoHorarioComponent],
    providers: [UsuarioService, ReporteService, CursoService, HorarioService]
})
export class CursoCrudModule { }
