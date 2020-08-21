import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Observable, of} from 'rxjs';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ServicesComponent } from './services/services.component';
import { FormationComponent } from './formation/formation.component';
import { CarriereComponent } from './carriere/carriere.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './test/login/login.component';
import { RegisterComponent } from './test/register/register.component';

export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ServicesComponent,
    FormationComponent,
   
    CarriereComponent,
    AproposComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps:[HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
