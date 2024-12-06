import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'page-4',
  templateUrl: './page-4.component.html',
  styleUrls: ['./page-4.component.scss', './../landing-integra.component.scss'],
})
export class Page4Component implements OnInit {

  constructor(public layoutService: LayoutService, public router: Router) { }

  itemSelecionado: any = {};
  pdialogOpen: boolean = false;
  isMd: boolean = false;

  @HostListener('window:resize', [])
  onResize() {
    this.isMd = window.innerWidth >= 768;
    console.log(this.isMd)
  }

  ngOnInit(): void {
    this.onResize()
  }

  selecionarItem(item: any) {
    this.itemSelecionado = item;
    this.pdialogOpen = true;
  }

  listaObjetos: any[] = [
    {
      title: "VENDAS",
      icon: "pi pi-shopping-cart",
      iconColor: "#540be1",   
      bgColor: "#d18dff",  
      topics: [
        { label: "Tenha na mão o histórico de clientes." },
        { label: "Utilize tabelas de preços diferentes de acordo com a situação e/ou cliente." },
        { label: "Aumente suas vendas com as opções “Leve junto” e “Itens similares”." },
        { label: "App para pré-vendas com captura de produtos para gerar pedidos." },
        { label: "App para vendedor externo." },
      ],
    }, {
      title: "ESTOQUE",
      icon: "pi pi-box",
      iconColor: "#7A2AE1",    
      bgColor: "#D8A6FF",  
      topics: [
        { label: "Consulte, liste e rastreie a movimentação de cada produto." },
        { label: "Gerencie a demanda por quantidade e frequência de vendas." },
        { label: "Controle o saldo do produto tendo “n” locações em diversos estoques." },
        { label: "Classificação curva ABC." }
      ]
    }, {
      title: "COMPRA",
      icon: "pi pi-cart-plus",
      iconColor: "#6712D1",    
      bgColor: "#F0B3FF",  
      topics: [
        { label: "Saiba em uma tela preço de compra X preço de venda X margem." },
        { label: "Tenha avaliações e histórico para comprar do melhor fornecedor." },
        { label: "Fazemos a baixa e carga do XML dos fornecedores." },
        { label: "Evite vendas com preços desatualizados." },
        { label: "Temos recursos para importadores." }
      ]
    }, {
      title: "FRENTE DE CAIXA - PDV",
      icon: "pi pi-credit-card",
      iconColor: "#8c31e3",    
      bgColor: "#D8A6FF",  
      topics: [
        { label: "Atende lojas que possuem auto-serviço e/ou atendimento no balcão." },
        { label: "Agrupe em um único cupom o faturamento de diversos pedidos do mesmo cliente." },
        { label: "Utilize o leitor de código de barras para as operações." },
        { label: "Emissão do cupom fiscal (SAT), NFC-e, Nota Fiscal Paulista e NF-e." }
      ]
    }, {
      title: "EMISSÃO DE NOTAS FISCAIS (NF-E)",
      icon: "pi pi-file",
      iconColor: "#540be1",    
      bgColor: "#D18DFF",  
      topics: [
        { label: "Emita de forma intuitiva e organizada." },
        { label: "Mantemos a NF-e sempre atualizada." },
        { label: "Utilize o módulo para emissão da CC-e (Carta de Correção Eletrônica)." },
        { label: "Não precisa ter conhecimento fiscal; como saber CFOP e IVA." }
      ]
    }, {
      title: "CONTROLE DE CRÉDITO",
      icon: "pi pi-credit-card",
      iconColor: "#6712D1",    
      bgColor: "#F0B3FF",  
      topics: [
        { label: "Evite prejuízos com maus pagadores." },
        { label: "Gerencie o limite de crédito e/ou faturamento bloqueado." },
        { label: "Tenha segurança para quem está vendendo." }
      ]
    }
  ];
}
