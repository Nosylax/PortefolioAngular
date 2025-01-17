import { Component, OnInit } from '@angular/core';
import { ProjetsComponent } from './projets/projets.component';
import { Projet } from './models/projets';
import { Competence } from './models/competences';
import { CompetencesComponent } from './competences/competences.component';
import { Contact } from './models/contacts';
import { ContactsComponent } from './contacts/contacts.component';
import { getProjects } from './configs/project';


@Component({
  selector: 'app-root',
  imports: [ProjetsComponent, CompetencesComponent, ContactsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  projets!: Projet[];
  competences!: Competence[];
  contacts!: Contact[];

  ngOnInit() {
    this.projets = getProjects().map((project) => new Projet(project.title, project.description, project.imageUrl))
    console.log(this.projets)
    this.competences = [
      new Competence(
        'React',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        "/react.jpg",
      ),
      new Competence(
        'HTML / CSS',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        "/html-css.jpg",
      ),
      new Competence(
        'JS',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        "/js.jpg",
      ),
      new Competence(
        'Gestion de projet',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        "/gestion-de-projet.png",
      ),
      new Competence(
        'Optimisation et debug',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        "/optimisation-et-debug.png",
      ),
      new Competence(
        'Test',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        "/test.png",
      )
    ]
    this.contacts = [
      new Contact(
        'Téléphone',
        '06.42.61.49.75',
        "/phone-solid.svg",
      ),
      new Contact(
        'Adresse email',
        'alyson.laville@gmail.com',
        "/envelope-solid.svg",
      ),
      new Contact(
        'LinKedIn',
        'Alyson Laville',
        "/linkedin-brands-solid.svg",
      )
    ]

  }
}
