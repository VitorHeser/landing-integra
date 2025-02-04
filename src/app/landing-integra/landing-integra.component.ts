import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-landing-integra',
    templateUrl: './landing-integra.component.html',
    styleUrls: ['./landing-integra.component.scss']
})
export class LandingIntegraComponent {

    constructor(public layoutService: LayoutService, public router: Router) { }

    scrollToElement(): void {
        const element = document.getElementById("formularioFim");
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            }, 200);
        } else {
            console.warn("Elemento #form não encontrado!");
        }
    }
}
