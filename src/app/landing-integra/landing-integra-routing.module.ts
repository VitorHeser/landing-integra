import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingIntegraComponent } from './landing-integra.component';
import { Page7SuccessComponent } from './page-7-success/page-7-success.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: LandingIntegraComponent },
        { path: 'obrigado', component: Page7SuccessComponent }
    ])],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
