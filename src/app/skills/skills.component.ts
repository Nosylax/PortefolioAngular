import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../models/skills';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [TitleCasePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  @Input() skill!: Skill;


  ngOnInit(): void {


  }


}
