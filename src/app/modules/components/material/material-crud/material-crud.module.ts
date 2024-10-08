import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialCrudRoutingModule } from './material-crud-routing.module';
import { MaterialCrudComponent } from './material-crud.component';
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
import { UsuarioService } from '../../../service/data/usuario.service';
import { ReporteService } from 'src/app/modules/service/data/reporte.service';
import { CardModule } from 'primeng/card';
import { AutoCompleteModule } from "primeng/autocomplete";
import { ChipsModule } from "primeng/chips";
import { InputMaskModule } from "primeng/inputmask";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { PersonaService } from 'src/app/modules/service/data/persona.service';
import { NotaService } from 'src/app/modules/service/data/nota.service';
import { CalendarModule } from 'primeng/calendar';
import { MaterialService } from 'src/app/modules/service/data/material.service';
import { UploadService } from 'src/app/modules/service/data/upload.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { TagModule } from 'primeng/tag';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ImageModule } from 'primeng/image';
import { ProgressBarModule } from 'primeng/progressbar';
@NgModule({
    imports: [
        PdfViewerModule,
        NgxExtendedPdfViewerModule,
        ImageModule,
        ProgressBarModule,
        SelectButtonModule,
        BreadcrumbModule,
        CommonModule,
        MaterialCrudRoutingModule,
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
        CardModule,
        NgxSpinnerModule,
        ReactiveFormsModule,
        TooltipModule,
        TagModule
    ],
    declarations: [MaterialCrudComponent],
    providers: [UsuarioService, ReporteService, MaterialService, NotaService, PersonaService, UploadService]
})
export class MaterialCrudModule { }
