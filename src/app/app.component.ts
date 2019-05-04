import { Component } from '@angular/core';
import { StyleService } from './style.service';

declare var Modernizr: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app1';

  constructor(private styleService: StyleService) {}
  createStyleSheet() {
    this.styleService.createStyleSheet('carmen.css');
  }

  flash() {
    console.log('batteryapi', Modernizr.batteryapi);
    console.log('ambientlight', Modernizr.ambientlight);
    console.log(Modernizr);
  }
}
