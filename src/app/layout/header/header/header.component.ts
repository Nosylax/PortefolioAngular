import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }
}
