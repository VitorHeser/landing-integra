import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingIntegraComponent } from './landing-integra.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: LandingIntegraComponent }
    ])],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
