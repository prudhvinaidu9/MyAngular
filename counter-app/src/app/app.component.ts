import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Counter App';
  
  count: number =0;
  handleIncrease=()=>{
    if(this.count<=9)
    {
      this.count= this.count+1;
    }
  }

  handleDecrease=()=>{
    if(this.count>=1)
    {
    this.count=this.count-1;
    }
  }

  handleReset =()=>{
    this.count=0;
  }
}
