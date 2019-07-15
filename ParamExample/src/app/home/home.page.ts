import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { ModalPage } from '../pages/modal/modal.page';
import { PopoverPage } from '../pages/popover/popover.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  value = 0;
  constructor(private router: Router, private modalController: ModalController,
              private popoverController: PopoverController) {}

  pushPage() {
    this.router.navigate(['/second', this.value]);
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        custom_id: this.value
      }
    });
    modal.present();
  }

  async openPopover(ev: Event) {
    const popover = await this.popoverController.create({
      component: PopoverPage,
      componentProps: {
        custom_id: this.value
      },
      event: ev
    });
    popover.present();
  }
}
