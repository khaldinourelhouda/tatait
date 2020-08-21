import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ServicesComponent } from './services/services.component';
import { FormationComponent } from './formation/formation.component';
import { CarriereComponent } from './carriere/carriere.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './test/login/login.component';
import { RegisterComponent } from './test/register/register.component';

const routes: Routes = [

  { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
  { path: 'acceuil', component: AcceuilComponent},
  { path: 'service', component: ServicesComponent},
  { path: 'formation', component: FormationComponent},
  { path: 'carriere', component: CarriereComponent},
  { path: 'apropos', component: AproposComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'test', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', component: AcceuilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
