import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.css']
})
export class ParametresComponent implements OnInit {
   id:any;
  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
   this.activatedroute.params.subscribe((d)=>{console.log(d['id']);
     
  
  }
  //(error)=>{console.log(erreur);};
  
  );
   

   // this.id=this.activatedroute.snapshot.params['id'];
   /* récuperer l'id qui se trouve dans le path du browser pour pouvoir
   envoyer une requéte vers la BD */
   // console.log(this.activatedroute.snapshot.params['id']);
  }

}
