import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public translateSvc: TranslateService) {
    translateSvc.setDefaultLang("en");
    translateSvc.use("en");
  }

  switchLanguage(language: string) {
    this.translateSvc.use(language);
  }
}
