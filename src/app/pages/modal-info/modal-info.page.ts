import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre;
  @Input() pais;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log('Datos recibidos: ', this.nombre, this.pais);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  sendData() {
    this.modalCtrl.dismiss({
      nombre: 'Nuevo nombre',
      pais: 'Nuevo pais'
    });
  }

}
