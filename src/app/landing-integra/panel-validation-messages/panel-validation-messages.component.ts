import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageTypeEnum } from 'src/assets/validation.util';

@Component({
  selector: 'app-panel-validation-messages',
  templateUrl: './panel-validation-messages.component.html',
  styleUrls: ['./panel-validation-messages.component.scss'],
})
export class PanelValidationMessagesComponent {
  private readonly SIDEBAR = 'sidebar';
  private readonly DIALOG = 'dialog';
  private readonly INNER = 'inner';
  private readonly SEVERITY_WARN = 'warn';
  private readonly SEVERITY_ERROR = 'error';
  private readonly SEVERITY_INFO = 'info';
  private readonly SEVERITY_SUCESS = 'success';

  @Input() messages: any[] = [];
  @Input() displayType: 'sidebar' | 'dialog' | 'inner' = 'dialog';
  @Input() display = false;

  @Output() callbackOnClose: EventEmitter<any> = new EventEmitter();
  messageTypeEnum = MessageTypeEnum;


  isSeverityWarning(severity: string) {
    return severity === this.SEVERITY_WARN;
  }

  isSeverityError(severity: string) {
    return severity === this.SEVERITY_ERROR;
  }

  isSeverityInfo(severity: string) {
    return severity === this.SEVERITY_INFO;
  }

  isSeveritySuccess(severity: string) {
    return severity === this.SEVERITY_SUCESS;
  }

  close() {
    this.callbackOnClose.emit();
  }

  public get displayDialog(): boolean {
    return this.displayType === this.DIALOG && this.display;
  }

  public get displaySidebar() {
    return this.displayType === this.SIDEBAR && this.display;
  }

  public get displayInner() {
    return this.displayType === this.INNER;
  }
}
