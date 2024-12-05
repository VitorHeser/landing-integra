import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'page-2',
  templateUrl: './page-2.component.html',
  styleUrls: ['./page-2.component.scss', './../landing-integra.component.scss'],
})
export class Page2Component {

  constructor(public layoutService: LayoutService, public router: Router) { }

  listaItems: any[] = [
    { icon: "pi pi-file", label: "Controle de Emissor de Nota Fiscal" },
    { icon: "pi pi-file-edit", label: "Controle de Emissão de NFS-e" },
    { icon: "pi pi-file-edit", label: "Controle de Emissão de NFC-e" },
    { icon: "pi pi-list", label: "Controle de Emissão de Boletos" },
  ];


}
