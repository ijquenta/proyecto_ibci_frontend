import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PanelComponent } from './panel.component';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelRoutingModule } from './panel-routing.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
@NgModule({
    imports: [
        CardModule,
        ToastModule,
        DialogModule,
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        PanelRoutingModule,
        ProgressSpinnerModule,
        NgxExtendedPdfViewerModule
    ],
    declarations: [PanelComponent]
})
export class PanelModule { }
