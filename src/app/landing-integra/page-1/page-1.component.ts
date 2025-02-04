import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'page-1',
  templateUrl: './page-1.component.html',
  styleUrls: ['./page-1.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class Page1Component {

  @Output() callbactToForm: EventEmitter<any> = new EventEmitter();

  constructor(public layoutService: LayoutService, public router: Router) { }

  toBottom() {
    this.callbactToForm.emit();
  }
}
