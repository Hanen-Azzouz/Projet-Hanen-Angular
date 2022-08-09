import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { FirstComponent } from './first/first.component';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ParametresComponent } from './parametres/parametres.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
 {path:'',redirectTo:'Login',pathMatch:'full'},
 {path:'addproduct', component:AddproductComponent} ,
 {path:'login',component:LoginComponent},
 {path:'detail/:id',component:ParametresComponent},
 {path:'first',component:FirstComponent},
 {path:'detailproducts/:id',component:DetailproductComponent},
 {path:'listproducts',component:ListproductsComponent},
 {path:'enseignant',component:EnseignantComponent},
 {path:'etudiant',component:StudentComponent},

  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
