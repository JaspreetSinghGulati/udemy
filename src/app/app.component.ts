import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-app';
  isText = false;
  textLabel = 'Display Details';
  timeArray:Array<Date> = [];
  resetName = function(){
    this.userName = '';
  }

  hideText = function(){
    this.isText = !this.isText;
    this.timeArray.push(Date.now());
    console.log(this.timeArray);
    if(this.isText){
      this.textLabel = 'Hide Details'
    }else{
      this.textLabel = 'Display Details';
    }
  }
}
