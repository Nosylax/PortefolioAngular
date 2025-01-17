import { Component } from '@angular/core';
import { ProjetsComponent } from './projets/projets.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProjetsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
