import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
     getuser(){
       return this.http.get('http://localhost:3000/etudiants');
       
       }
       
     }


}
