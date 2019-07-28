import { Component, Self, Optional } from '@angular/core';
import { AppService } from './sample-test//services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders:[AppService]
})


export class AppComponent {
  divColor: String;
  setColor(color:string){
    this.divColor=color;

  }
  // constructor(@Self() @Optional() private appService: AppService) {
  //   this.divColor = this.appService.getColor();
  //   //this.divColor='yellow';
  // }
  title = 'service-app';
}
