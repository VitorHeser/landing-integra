import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'page-7',
  templateUrl: './page-7.component.html',
  styleUrls: ['./page-7.component.scss', './../landing-integra.component.scss'],
})
export class Page7Component {

  constructor(public layoutService: LayoutService, public router: Router) { }

}
