import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CursoCrudRoutingModule } from '../curso-crud-routing.module';
import { CursoHorarioComponent } from './curso-horario.component';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { UsuarioService } from '../../../../service/data/usuario.service';
import { ReporteService } from 'src/app/modules/service/data/reporte.service';
import { AutoCompleteModule } from "primeng/autocomplete";
import { ChipsModule } from "primeng/chips";
import { InputMaskModule } from "primeng/inputmask";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { PersonaService } from 'src/app/modules/service/data/persona.service';
import { NotaService } from 'src/app/modules/service/data/nota.service';
import { CalendarModule } from 'primeng/calendar';
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
import { TooltipModule } from 'primeng/tooltip';
import { ReactiveFormsModule } from '@angular/forms'; // Importamos el module para validaciones
import { AvatarModule } from 'primeng/avatar';
import { UploadService } from 'src/app/modules/service/data/upload.service'; // Importar para subir archivos
import { CardModule } from 'primeng/card';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CursoService } from 'src/app/modules/service/data/curso.service';
import { MateriaService } from 'src/app/modules/service/data/materia.service';
import { HorarioService } from 'src/app/modules/service/data/horario.service';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TabViewModule } from 'primeng/tabview';
@NgModule({
    imports: [
        TabViewModule,
        FullCalendarModule,
        BreadcrumbModule,
        CommonModule,
        CursoCrudRoutingModule,
        TableModule,
        FileUploadModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        AutoCompleteModule,
        ChipsModule,
        InputMaskModule,
        CascadeSelectModule,
        MultiSelectModule,
        CalendarModule,
        TagModule,
        ChipModule,
        CalendarModule,
        TooltipModule,
        ReactiveFormsModule,
        AvatarModule,
        CardModule,
        NgxSpinnerModule
    ],
    declarations: [],
    providers: [UsuarioService, ReporteService, NotaService, PersonaService, UploadService, CursoService, MateriaService, HorarioService]
})
export class CursoHorarioModule { }
