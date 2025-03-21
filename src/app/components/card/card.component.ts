import { Component, Input } from '@angular/core';
import { CardData } from '../../models/card';
import { NgIf, TitleCasePipe } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@Component({
  selector: 'app-card',
  imports: [TitleCasePipe, NgIf, MatProgressBarModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() data!: CardData;


}
