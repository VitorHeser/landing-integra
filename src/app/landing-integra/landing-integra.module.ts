import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule as LandingIntegraRoutingModule } from './landing-integra-routing.module';
import { LandingIntegraComponent } from './landing-integra.component';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { Page1Component } from './page-1/page-1.component';
import { Page2Component } from './page-2/page-2.component';
import { Page3Component } from './page-3/page-3.component';
import { Page4Component } from './page-4/page-4.component';
import { Page5Component } from './page-5/page-5.component';
import { DialogModule } from 'primeng/dialog';
import { Page6Component } from './page-6/page-6.component';
import { Page7Component } from './page-7/page-7.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    imports: [
        CommonModule,
        LandingIntegraRoutingModule,
        DividerModule,
        StyleClassModule,
        ChartModule,
        PanelModule,
        ButtonModule,
        DialogModule,
        InputTextModule
    ],
    declarations: [
        LandingIntegraComponent,
        Page1Component,
        Page2Component,
        Page3Component,
        Page4Component,
        Page5Component,
        Page6Component,
        Page7Component
    ]
})
export class LandingIntegraModule { }
