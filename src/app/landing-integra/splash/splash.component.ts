import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashScreenComponent {
  @Input() isLoading: boolean = true;
}
