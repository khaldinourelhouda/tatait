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

  $("#n2").hide();
  $("#n1").show();
  

}

  constructor( public translate:TranslateService){
    translate.addLangs(['en','fr']);
    translate.setDefaultLang('en');
    const browserLang =translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang:'en');


    localStorage.setItem("h1","true");
    localStorage.setItem("h2","false");
 }

 ch(){
    
  localStorage.setItem("h1","false");

  localStorage.setItem("h2","true");
  
  $("#n1").hide();
 
  $("#n2").show();

}
}
