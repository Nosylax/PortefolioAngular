import { Component, Input } from '@angular/core';
import { NgIf, TitleCasePipe } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CardData } from '../../../models/card';

@Component({
  selector: 'app-project-card',
  imports: [TitleCasePipe, MatProgressBarModule, NgIf],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() data!: CardData;

}
