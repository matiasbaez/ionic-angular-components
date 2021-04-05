import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, ToastController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  users: any;
  @ViewChild('list') list: IonList;

  constructor(
    private dataService: DataService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  favorite(user) {
    console.log(user);
    this.presentToast('Añadido a favoritos');
    this.list.closeSlidingItems();
  }

  share(user) {
    console.log(user);
    this.presentToast('Compartido');
    this.list.closeSlidingItems();
  }

  delete(user) {
    console.log(user);
    this.presentToast('Borrado');
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });

    toast.present();
  }

}
