import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss', './../landing-integra.component.scss'],
})
export class FormularioComponent {

  nome: string = 'Teste';
  email: string = 'teste@teste.com';
  telefone: string = '123123123';

  constructor(public layoutService: LayoutService, public router: Router, private http: HttpClient) {

  }

  submitForm() {
    const body: Cliente = {
      nome: this.nome, 
      email: this.email,
      telefone: this.telefone, 
    };

    this.enviarDados(body);
  }

  enviarDados(body: Cliente) {
    const url = (body: Cliente) => `${environment.url}&fullname=${body.nome}&email=${body.email}&phone=${body.telefone}`;
    this.http.get(url(body)).subscribe(
      response => {
        this.tratarRetorno(response)
      },
      error => {
        this.tratarRetorno(error)
      }
    );
  }

  tratarRetorno(response) {
    var code = response.status;
    if(code==200){
      this.router.navigate(["obrigado"])
    }
  }
}

export interface Cliente {
  nome: string;
  email: string;
  telefone: string;
}
