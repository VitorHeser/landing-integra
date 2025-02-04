import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { MessageDTO, ValidationUtil } from 'src/assets/validation.util';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss', './../landing-integra.component.scss'],
})
export class FormularioComponent {

  nome: string = '';
  email: string = '';
  telefone: string = '';
  msgs1: MessageDTO[] = [];

  constructor(public layoutService: LayoutService, public router: Router, private http: HttpClient) {

  }

  submitForm() {
    this.msgs1 = []
    const body: Cliente = {
      nome: this.nome, 
      email: this.email,
      telefone: this.telefone, 
    };
    ValidationUtil.addMessageRequiredField(body.nome, "Nome", this.msgs1)
    ValidationUtil.addMessageRequiredField(body.email, "Email", this.msgs1)
    ValidationUtil.addMessageRequiredField(body.telefone, "Telefone", this.msgs1)
    ValidationUtil.addMessageInvalidEmail(body.email, "Email", this.msgs1)
    ValidationUtil.addMessageInvalidPhone(body.telefone, "Telefone", this.msgs1)
    console.log(this.msgs1)
    // this.enviarDados(body);
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

  formatarTelefone() {
    let valor = this.telefone.replace(/\D/g, ''); // Remove tudo que não for número

    if (valor.length > 2) {
      valor = `(${valor.substring(0, 2)}) ${valor.substring(2)}`;
    }
    if (valor.length > 9) {
      valor = valor.replace(/(\(\d{2}\)) (\d{5})(\d{4})/, '$1 $2-$3'); // Formato celular
    } else if (valor.length > 8) {
      valor = valor.replace(/(\(\d{2}\)) (\d{4})(\d{4})/, '$1 $2-$3'); // Formato fixo
    }
    
    this.telefone = valor;
  }

  validarTelefone(): boolean {
    return ValidationUtil.isValidPhone(this.telefone)
  }
  
  validarEmail(): boolean {
    return ValidationUtil.isValidEmail(this.email)
  }
}

export interface Cliente {
  nome: string;
  email: string;
  telefone: string;
}
