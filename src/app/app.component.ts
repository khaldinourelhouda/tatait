import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngxtranslat';


  
ngOnInit() {

 /* hide navbar specifique (n2) de l'application et show navbar global (n1)  de l'application*/
  $("#n2").hide();
  $("#n1").show();
  

}

  constructor( public translate:TranslateService){
    /* changement de la langue de l'application*/
    translate.addLangs(['en','fr']);
    translate.setDefaultLang('en');
    const browserLang =translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang:'en');

    
    localStorage.setItem("h1","true");
    localStorage.setItem("h2","false");
 }

 ch(){
    
  /*cacher le navbar principale et afficher le navbar specipique de l'application */
  localStorage.setItem("h1","false");

  localStorage.setItem("h2","true");
  
  $("#n1").hide();
 
  $("#n2").show();

}
}
