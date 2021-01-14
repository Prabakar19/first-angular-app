import { Component, OnInit } from '@angular/core';
import { CalculatorServiceService } from '../../services/CalculatorService/calculator-service.service';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css'],
})
export class CalculateComponent implements OnInit {
  constructor(private calc: CalculatorServiceService) {}

  result: number = 0;
  num1: number;
  num2: number;

  ngOnInit(): void {}

  addition() {
    this.result = this.calc.add(this.num1, this.num2);
  }

  subtraction() {
    this.result = this.calc.subtract(this.num1, this.num2);
  }

  multiplication() {
    this.result = this.calc.multiply(this.num1, this.num2);
  }

  division() {
    this.result = this.calc.divide(this.num1, this.num2);
  }
}
