import { Component, Input } from '@angular/core';
import { CardData } from '../../models/card';
import { NgIf, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [TitleCasePipe, NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() data!: CardData;


}
