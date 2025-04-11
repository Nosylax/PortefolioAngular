import { Component, OnInit } from '@angular/core';
import { getProjects } from './configs/project';
import { getSkills } from './configs/skill';
import { getContact } from './configs/contact';
import { CardData } from './models/card';

// Composants standalone importés
import { HeaderComponent } from './layout/header/header/header.component';
import { FooterComponent } from './layout/footer/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { FormsComponent } from './components/forms/forms.component';
import { SkillCardComponent } from './components/card/skill-card/skill-card.component';
import { ProjectCardComponent } from './components/card/project-card/project-card.component';

// ngx-translate
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TranslateModule,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    FormsComponent,
    SkillCardComponent,
    ProjectCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  projects!: CardData[];
  skills!: CardData[];
  contacts!: CardData[];



  ngOnInit() {
    this.projects = getProjects().map(
      (project) =>
        new CardData(
          project.title,
          project.description,
          project.imageUrl,
          project.GHlink,
          project.GHPlink
        )
    );

    this.skills = getSkills().map(
      (skill) =>
        new CardData(
          skill.title,
          skill.description,
          skill.imageUrl,
          undefined,
          undefined,
          skill.progress
        )
    );

    this.contacts = getContact().map(
      (contact) =>
        new CardData(
          contact.title,
          contact.description,
          contact.imageUrl
        )
    );
  }
}
