import { Component, OnInit } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { Project } from './models/projects';
import { Skill } from './models/skills';
import { SkillsComponent } from './skills/skills.component';
import { Contact } from './models/contacts';
import { ContactsComponent } from './contacts/contacts.component';
import { getProjects } from './configs/project';
import { getSkills } from './configs/skill';
import { getContact } from './configs/contact';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';



@Component({
  selector: 'app-root',
  imports: [ProjectsComponent, CardComponent, SkillsComponent, ContactsComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  projects!: Project[];
  skills!: Skill[];
  contacts!: Contact[];

  ngOnInit() {
    this.projects = getProjects().map((project) => new Project(project.title, project.description, project.imageUrl))
    this.skills = getSkills().map((skill) => new Skill(skill.title, skill.description, skill.imageUrl))
    this.contacts = getContact().map((contact) => new Contact(contact.title, contact.description, contact.imageUrl))
  }
}