import { Component, Input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CardData } from '../../../models/card';

@Component({
  selector: 'app-skill-card',
  imports: [TitleCasePipe, MatProgressBarModule],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {
  @Input() data!: CardData;
}
