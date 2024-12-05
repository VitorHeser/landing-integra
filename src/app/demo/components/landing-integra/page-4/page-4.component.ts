import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'page-4',
  templateUrl: './page-4.component.html',
  styleUrls: ['./page-4.component.scss', './../landing-integra.component.scss'],
})
export class Page4Component {

  constructor(public layoutService: LayoutService, public router: Router) { }

}
