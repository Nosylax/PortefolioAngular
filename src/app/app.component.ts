import { Component, OnInit } from '@angular/core';
import { ProjetsComponent } from './projets/projets.component';
import { Projet } from './models/projets';
import { Competence } from './models/competences';
import { CompetencesComponent } from './competences/competences.component';
import { Contact } from './models/contacts';
import { ContactsComponent } from './contacts/contacts.component';
import { getProjects } from './configs/project';
import { getSkills } from './configs/skill';
import { getContact } from './configs/contact';


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
    this.competences = getSkills().map((competence) => new Projet(competence.title, competence.description, competence.imageUrl))
    this.contacts = getContact().map((contact) => new Projet(contact.title, contact.description, contact.imageUrl))
  }
}
