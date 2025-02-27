import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'page-7',
  templateUrl: './page-7.component.html',
  styleUrls: ['./page-7.component.scss', './../landing-integra.component.scss'],
})
export class Page7Component {

  constructor(public layoutService: LayoutService, public router: Router, private http: HttpClient) {

  }

}
