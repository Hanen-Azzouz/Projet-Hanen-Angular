import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { NavComponent } from './nav/nav.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { ParametresComponent } from './parametres/parametres.component';
import { DetailComponent } from './detail/detail.component';
import { SearchstudentComponent } from './searchstudent/searchstudent.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AddproductComponent,
    NavComponent,
    NotfoundComponent,
    LoginComponent,
    ParametresComponent,
    DetailComponent,
    SearchstudentComponent,
    ListproductsComponent,
    DetailproductComponent,
    EnseignantComponent,
    StudentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
