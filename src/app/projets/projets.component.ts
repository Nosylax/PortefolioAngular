import { Component, Input, OnInit } from '@angular/core';
import { Projet } from '../models/projets';
import { TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-projets',
  imports: [TitleCasePipe],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.scss'
})
export class ProjetsComponent implements OnInit {
  @Input() projet!: Projet;
  


  ngOnInit(): void {

   

  }
}
