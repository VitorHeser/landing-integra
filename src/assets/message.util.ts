import { Message } from 'primeng/api';
import { MessageDTO, MessageTypeEnum } from './validation.util';
import { MessageEnum } from './message.enum';

export class MessageUtil {
  private static messageTypeEnum = MessageTypeEnum;

  static createMessage(type: MessageTypeEnum, title: string, description: string, params?: string[]): MessageDTO {
    return new MessageDTO(type, MessageUtil.replaceMessageParams(description, params), title);
  }

  static createSuccessMessage(title: string, description: string, params?: string[]): MessageDTO {
    return MessageUtil.createMessage(MessageTypeEnum.SUCCESS, title, description, params);
  }

  static createErrorMessage(title: string, description: string, params?: string[]): MessageDTO {
    return MessageUtil.createMessage(MessageTypeEnum.ERROR, title, description, params);
  }

  static createWarnMessage(title: string, description: string, params?: string[]): MessageDTO {
    return MessageUtil.createMessage(MessageTypeEnum.WARNING, title, description, params);
  }

  static createInfoMessage(title: string, description: string, params?: string[]): MessageDTO {
    return MessageUtil.createMessage(MessageTypeEnum.INFO, title, description, params);
  }

  static getSuccessMessage(): MessageDTO {
    return new MessageDTO(MessageTypeEnum.SUCCESS, MessageEnum.APP_OPERACAO_REALIZADA_COM_SUCESSO);
  }

  static getRecordNotFoundMessage(): MessageDTO {
    return new MessageDTO(MessageTypeEnum.INFO, MessageEnum.APP_NENHUM_REGISTRO_ENCONTRADO);
  }

  static replaceMessageParams(message: string, params?: string[]): string {
    let result = message;
    if (params) {
      params.forEach((p) => {
        result = result.replace(new RegExp('\\{' + params.indexOf(p) + '\\}', 'g'), p);
      });
    }
    return result;
  }

  static convertNativeMessagesToPrimeNg(messages: MessageDTO[]): Message[] {
    let convertedMessages: any[]= [];

    if (messages) {
      convertedMessages = [] as Message[];
      messages.forEach((m) => {
        const convertedMessage: Message | null = MessageUtil.convertUniqueNativeMessageToPrimeNg(m);
        if (convertedMessage) {
          convertedMessages.push(convertedMessage);
        }
      });
    }

    return convertedMessages;
  }

  static convertUniqueNativeMessageToPrimeNg(mensagem: MessageDTO): Message | null {
    // let convertedMessage: Message = null;
    if (mensagem) {
      return mensagem.mensagem;
    }
    return null;
  }

  static mapMessageDtoToMessage(i: MessageDTO) {
    return ({ severity: `${i.type}`.toLowerCase(), summary: i.description });
  }
  
}
