import { Message } from "primeng/api";
import { MessageEnum } from "./message.enum";
import { MessageUtil } from "./message.util";
import { ObjectUtil } from "./object.util";

export class ValidationUtil {
  public static addMessageConditionalField(mensagem: string, messages: MessageDTO[], condition: boolean) {
    if (condition) {
      messages.push(MessageUtil.createWarnMessage('Regra Violada', mensagem, []));
    }
  }

  public static addMessageRequiredField(field: any, fieldName: string, messages: MessageDTO[], condition?: boolean) {
    if (!this.isRequiredFieldFilled(field, condition)) {
      messages.push(MessageUtil.createWarnMessage('Campo obrigatório', MessageEnum.APP_CAMPO_OBRIGATORIO, [fieldName]));
    }
  }

  public static addMessageInvalidEmail(campo: string, fieldName: string, messages: MessageDTO[], condition?: boolean) {
    if ((condition == null || condition) && !this.isValidEmail(campo)) {
      messages.push(MessageUtil.createWarnMessage('Email Inválido', MessageEnum.APP_CAMPO_INVALIDO, [fieldName]));
    }
  }

  public static addMessageInvalidPhone(phone: string, fieldName: string, messages: MessageDTO[], condition?: boolean) {
    if ((condition == null || condition) && !this.isValidPhone(phone)) {
      messages.push(MessageUtil.createWarnMessage('Telefone Inválido', MessageEnum.APP_CAMPO_INVALIDO, [fieldName]));
    }
  }

  public static isValidEmail(email: string) {
    if (!email || email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      return true;
    } else {
      return false;
    }
  }

  public static isValidPhone(phone: string): boolean {
    const phoneRegex = /^\(\d{2}\) (?:9\d{4}|\d{4})-\d{4}$/;
    return phoneRegex.test(phone);
  }

  public static isRequiredFieldFilled(field: any, condition?: boolean) {
    if ((condition == null || condition) && ObjectUtil.isFilled(field)) {
      return true;
    }
    return false;
  }

}

export class MessageDTO {

  type: MessageTypeEnum;
  title?: string;
  description: string;

  constructor(type: MessageTypeEnum, description: string, title?: string) {
    this.type = type;
    this.description = description;
    this.title = title;
  }

  public get mensagem(): Message {
    return  <Message>{
      severity: this.type.toLowerCase(),
      detail: ""
    };
  }

}
export enum MessageTypeEnum {
  SUCCESS = 'SUCCESS',
  INFO = 'INFO',
  WARNING = 'WARN',
  ERROR = 'ERROR',
}
