import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'page-5',
  templateUrl: './page-5.component.html',
  styleUrls: ['./page-5.component.scss', './../landing-integra.component.scss'],
})
export class Page5Component {

  constructor(public layoutService: LayoutService, public router: Router) { }

}
