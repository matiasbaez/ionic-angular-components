import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: any;

  constructor(
    private loadingCtrl: LoadingController 
  ) { }

  ngOnInit() {
    this.presentLoading('Cargando...');

    setTimeout(() => {
      this.loading.dismiss();
    }, 3500);
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      message,
      // duration: 2000
    });
    return this.loading.present();

    // const { role, data } = await loading.onDidDismiss();

    // console.log('Loading dismissed!');
  }

}
