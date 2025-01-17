import { Component, Input, OnInit } from '@angular/core';
import { Competence } from '../models/competences';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-competences',
  imports: [TitleCasePipe],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.scss'
})
export class CompetencesComponent implements OnInit {
  @Input() competence!: Competence;


  ngOnInit(): void {

   
  }


}
