import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1st';
  public name:string="rupam";
  public age:number=22;
  public roll:number=27;
  public location:string="birati"
  public arr:any={'name2':"rupam",'roll2':27,'location2':"birati"};
  
  click1(n1:any)
  {
   console.log("button clicked.....");
   console.log(n1.value);
  }
  
}
