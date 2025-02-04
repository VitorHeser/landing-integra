import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { MessageUtil } from 'src/assets/message.util';
import { ValidationUtil } from 'src/assets/validation.util';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {

  isLoading: boolean = false;
  nome: string = '';
  email: string = '';
  telefone: string = '';
  convertedMessages: Message[] = [];

  constructor(public layoutService: LayoutService, public router: Router, private http: HttpClient) {

  }

  submitForm() {
    const body: Cliente = {
      nome: this.nome, 
      email: this.email,
      telefone: this.telefone, 
    };
    var mensagens = this.validarFormulario(body);
    if(mensagens.length==0) {
      this.isLoading = true;
      this.enviarDados(body);
    }
  }

  validarFormulario(body: Cliente) {
    this.convertedMessages = []
    var mensagens = []
    ValidationUtil.addMessageRequiredField(body.nome, "Nome", mensagens)
    ValidationUtil.addMessageRequiredField(body.email, "Email", mensagens)
    ValidationUtil.addMessageRequiredField(body.telefone, "Telefone", mensagens)
    ValidationUtil.addMessageInvalidEmail(body.email, "Email", mensagens)
    ValidationUtil.addMessageInvalidPhone(body.telefone, "Telefone", mensagens)
    this.convertedMessages = mensagens.map(MessageUtil.mapMessageDtoToMessage);
    return mensagens;
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
    this.isLoading = false;
    var code = response.status;
    if(code==200){
      this.router.navigate(["obrigado"])
    } else {
      this.mostrarErro();
    }
  }

  mostrarErro() {
    var mensagens = [MessageUtil.createErrorMessage("Ocorreu um erro ao salvar", "Ocorreu um erro ao salvar, tente novamente mais tarde.")]
    this.convertedMessages = mensagens.map(MessageUtil.mapMessageDtoToMessage);
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

  get existConvertedMessages() {
    return this.convertedMessages.length > 0;
  }
}

export interface Cliente {
  nome: string;
  email: string;
  telefone: string;
}
