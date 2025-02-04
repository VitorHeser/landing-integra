import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Location } from '@angular/common';

@Component({
  selector: 'page-7-success',
  templateUrl: './page-7-success.component.html',
  styleUrls: ['./page-7-success.component.scss', './../landing-integra.component.scss'],
})
export class Page7SuccessComponent {

  constructor(public layoutService: LayoutService, public location: Location, private http: HttpClient) {

  }


  voltar() {
      this.location.back()
  }
}
