import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
question!:string;
reponse!:string;
  constructor() { }

  ngOnInit(): void {

this.question='quand sera votre examen?';
this.reponse='le samedi';

  }

}
