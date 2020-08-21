import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide1:boolean = true;
  hide2:boolean
  constructor() { }

  ngOnInit() {
  }

  choix1(){
    this.hide1 = true;
    this.hide2=false;
  }
  
  choix2(){
    this.hide1 = false;
    this.hide2=true;
  }
}
