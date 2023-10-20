import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  num1 : number = 0;
  num2 : number = 0;
  resultado : number = 0;


  constructor() {
    //this.num1 = 0;
    //this.num2 = 0;
    //this.resultado = 0;
  }
  
  adicao(){
    this.resultado = this.num1 + this.num2;
    this.exibirResultado();
  }

  subtracao(){
    this.resultado = this.num1 - this.num2;
    this.exibirResultado();
  }

  divisao(){
    this.resultado = this.num1 / this.num2;
    this.exibirResultado();
  }

  multiplicacao(){
    this.resultado = this.num1 * this.num2;
    this.exibirResultado();
  }

  seno(){
   this.resultado = (Math.sin(this.num1));
   this.exibirResultado();
  }

  cosseno(){
    this.resultado = (Math.cos(this.num1));
    this.exibirResultado();

  }
  tan(){

  }

  exibirResultado(){
    console.info("Resultado: ", this.resultado);
  }

}
