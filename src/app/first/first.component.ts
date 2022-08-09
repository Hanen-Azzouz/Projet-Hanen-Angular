import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
name='test';
color='red';
enabled=false;
  constructor(private ts:TestService) {
    console.log('constructor');
   }

  ngOnInit(): void {
    console.log('oninit');
    
  }
  
  showmsg()
  {
    alert('bonjour');
  }
  getColor()
  {
    if(this.enabled==true)
    {return 'red';}
    else {return'green';}
  }
  changecolor(c:any)
  {
    this.color=c;
    console.log(c);
  }
  affichermsg1()
  {this.ts.msg1();}
  affichermsg2()
{this.ts.msg2();}

}
