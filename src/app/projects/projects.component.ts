import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/projects';
import { TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-projects',
  imports: [TitleCasePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  @Input() project!: Project;



  ngOnInit(): void {



  }
}
