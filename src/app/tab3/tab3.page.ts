import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  redValue: number = 0;
  greenValue: number = 0;
  blueValue: number = 0;
  opacityValue: number = 1; // Opacidade inicial
  backgroundColor: string = 'rgba(0, 0, 0, 1)'; // Cor de fundo inicial (com opacidade)
  rgbColor: string = 'rgb(0, 0, 0)'; // Cor RGB atualizada

  redValues: number[] = Array.from({ length: 256 }, (_, i) => i);
  greenValues: number[] = Array.from({ length: 256 }, (_, i) => i);
  blueValues: number[] = Array.from({ length: 256 }, (_, i) => i);

  updateBackgroundColor() {
    // Atualize a cor de fundo com base nas seleções de Vermelho, Verde, Azul e Opacidade
    this.backgroundColor = `rgba(${this.redValue}, ${this.greenValue}, ${this.blueValue}, ${this.opacityValue})`;
  
    // Atualize a cor RGB atualizada
    this.rgbColor = `rgb(${this.redValue}, ${this.greenValue}, ${this.blueValue})`;
  }

   // Função para lidar com a seleção de um valor no popover
  selectValue(value: number) {
    // Aqui você pode fazer algo com o valor selecionado (por exemplo, atribuir a uma variável)
    // Feche o popover (se necessário)
  }
}
