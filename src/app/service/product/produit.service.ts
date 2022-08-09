import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
product! :any;
  constructor(private http:HttpClient) { }
getproducts()
{
  return this.http.get('http://localhost:3000/produits');
}
getProductById(id:any)
{
return this.http.get('http://localhost:3000/produits/'+id);
}
addproduct(data:any)
{
 return this.http.post('http://localhost:3000/produits',data);
}
}
