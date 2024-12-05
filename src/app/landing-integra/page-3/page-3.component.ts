import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'page-3',
  templateUrl: './page-3.component.html',
  styleUrls: ['./page-3.component.scss', './../landing-integra.component.scss'],
})
export class Page3Component {

  constructor(public layoutService: LayoutService, public router: Router) { }

  listaItems: any[] = [
    { icon: "pi pi-money-bill", label: "Controle Financeiro" },
    { icon: "pi pi-wallet", label: "Fluxo de Caixa" },
    { icon: "pi pi-cart-plus", label: "Controle de Vendas" },
    { icon: "pi pi-box", label: "Controle de Estoque" },
  ];

}
