import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;  // Par défaut, le menu est fermé

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('fr');  // Langue par défaut
    this.translate.use('fr');  // Langue actuelle par défaut
  }

  // Fonction pour changer la langue
  switchLang(lang: string) {
    this.translate.use(lang);  // Change la langue
    this.isMenuOpen = false;  // Ferme le menu après la sélection
  }

  // Fonction pour ouvrir/fermer le menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit() {
    this.translate.use('fr');  // Assure-toi de charger la langue par défaut
  }
}
