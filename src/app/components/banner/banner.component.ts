import { Component } from '@angular/core';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-banner',
  imports: [
    TranslateModule
  ],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
}
