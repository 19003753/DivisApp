import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  quetzales: number | null = null;
  dolares: number | null = null;

  constructor() {}

  convertir() {
    if (this.quetzales === null || isNaN(Number(this.quetzales))) {
      this.dolares = null;
      return;
    }

    // 1 dolar = 8 quetzales
    this.dolares = Number(this.quetzales) / 8;
  }
}
