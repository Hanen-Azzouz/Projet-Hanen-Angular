import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  msg1()
  {console.log('bonjour');}
  msg2()
  {alert('bonsoir');}
}
