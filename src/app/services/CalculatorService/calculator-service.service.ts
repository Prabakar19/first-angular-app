import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorServiceService {
  constructor() {}

  add(number1: number, number2: number) {
    return number1 + number2;
  }

  subtract(number1: number, number2: number) {
    return number1 - number2;
  }

  multiply(number1: number, number2: number) {
    return number1 * number2;
  }

  divide(number1: number, number2: number) {
    return number1 / number2;
  }
}
