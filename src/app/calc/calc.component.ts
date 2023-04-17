import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {

    altura: number = 0;
    imc: number | undefined;
    peso: number = 0;
    result: string | null = null;
    calculo() {
      if (this.altura !== null || this.peso !== null) {
        this.imc = this.peso / (this.altura * this.altura);
        if (this.imc < 18.5){
         this.result = 'equivalente à abaixo do peso!';
        } else if (this.imc < 25) {
          this.result = 'equivalente à peso ideal';
        } else if (this.imc < 30) {
          this.result = 'equivalente à sobrepeso';
        } else if (this.imc < 40) {
          this.result = 'equivalente à obesidade';
        }
        else {
          this.result = 'equivalente à obesidade grave';
        }
      }
      else {
        this.imc = undefined;
        this.result = 'Algo deu errado.';
      }
    }

    limpar(){
      this.altura = 0;
      this.peso = 0;
      this.result = null;
      this.imc = undefined;
    }
}
