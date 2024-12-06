import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'page-6',
  templateUrl: './page-6.component.html',
  styleUrls: ['./page-6.component.scss', './../landing-integra.component.scss'],
})
export class Page6Component {

  constructor(public layoutService: LayoutService, public router: Router) { }
  
  listaObjetos = [
    {
      title: "CONTROLE DE DEVOLUÇÃO E TROCA",
      icon: "pi pi-refresh",
      color: "#FF5722",
      topics: [
        { label: "Permite travar a troca sem a comprovação da venda." },
        { label: "Tenha mais segurança sobre a quantidade vendida x quantidade devolvida." }
      ]
    },
    {
      title: "CONTROLE DE ENTREGAS",
      icon: "pi pi-truck",
      color: "#4CAF50",
      topics: [
        { label: "Acompanhe entregas por motoboy, transportador, endereço, região, etc." },
        { label: "Visualize o andamento das entregas de todas as lojas em uma única tela." }
      ]
    },
    {
      title: "FINANCEIRO",
      icon: "pi pi-wallet",
      color: "#FFC107",
      topics: [
        { label: "Totalmente integrado entre os departamentos e lojas." },
        { label: "Preenchimento automático de dados básicos a cada evento financeiro." },
        { label: "Tenha em mãos relatórios de gestão do fiado e controle de conta de clientes." }
      ]
    },
    {
      title: "GERENCIAL",
      icon: "pi pi-chart-line",
      color: "#3F51B5",
      topics: [
        { label: "Crie controles, regras e processos loja a loja ou para várias lojas." },
        { label: "Análise vendas e rentabilidade por loja, produto, vendedor, etc." },
        { label: "Antecipe-se a demandas futuras." }
      ]
    }
  ];
  
  
}
