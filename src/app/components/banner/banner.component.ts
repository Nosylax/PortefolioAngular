import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  // constructor(private translate: TranslateService) {
  //   this.translate.setDefaultLang('fr');
  //   this.translate.use('fr');
  // }

  // switchLang(lang: string) {
  //   this.translate.use(lang);
  // }

}
