import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { produits } from 'model/produits';
import { ProduitService } from '../service/product/produit.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
product=new produits();
  constructor(private p:ProduitService,private route:Router) { }

  ngOnInit(): void {
  }
  ajouter(data:any)
  {return this.p.addproduct(this.product).subscribe(
    ()=>{this .route.navigate(['/listproducts/']);}
  );
    
  }

}
