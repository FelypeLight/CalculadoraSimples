import { Component } from '@angular/core';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  expression: string = '';
  buttons = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '+', value: '+' },
    { label: '0', value: '0' },
    { label: '*', value: '*' },
    { label: '/', value: '/' },
    { label: '.', value: '.' },
    { label: '-', value: '-' },
    { label: 'sin', value: 'sin(' },
    { label: 'cos', value: 'cos(' },
    { label: 'tan', value: 'tan(' },
    { label: '(', value: '(' },
    { label: ')', value: ')' },
    { label: ')', value: ')' },
    
  ];

  constructor() {}

  addToExpression(value: string) {
    this.expression += value;
  }

  calculate() {
    try {
      this.expression = evaluate(this.expression);
    } catch (error) {
      this.expression = 'Erro';
    }
  }

  clear() {
    this.expression = '0';
  }
}
