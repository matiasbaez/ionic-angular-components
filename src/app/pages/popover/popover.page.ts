import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
  }

  async showPopover(event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent,
      event: event,
      mode: 'ios',
      backdropDismiss: false
    });

    await popover.present();

    // const { data } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();
    console.log('Popover return data: ', data);
  }

}
