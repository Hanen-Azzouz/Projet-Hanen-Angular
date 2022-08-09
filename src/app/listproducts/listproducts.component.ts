import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../service/product/produit.service';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {
listProduct!:any;
  constructor(private product:ProduitService) { }

  ngOnInit(): void {
    this.product.getproducts().subscribe(
      (data)=>{
        this.listProduct=data;
        console.log(data);
      }

    );
  }

}
