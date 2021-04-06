import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes: Observable<Componente[]>;

  constructor(
    private dataService: DataService,
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.componentes = this.dataService.getMenuOptions();
    });
  }
}
