import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, 
        AppLayoutModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
