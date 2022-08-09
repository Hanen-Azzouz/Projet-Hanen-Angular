import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../service/product/produit.service';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {
id! :any;
products!:any;
  constructor(private route:ActivatedRoute,private product:ProduitService) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    this.product.getProductById(this.id).subscribe(
      (d)=>{this.products=d;
        
        //console.log(d);

      }
    );
  }

}
