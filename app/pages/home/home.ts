import {Component} from '@angular/core';
import {Modal, NavController} from 'ionic-angular';
import {AddItemPage} from '../add-item/add-item';

@Component({
  templateUrl: 'build/pages/home/home.html',
})

export class HomePage {

  private items = [];

  constructor(private nav:NavController) {

  }

  addItem() {

    let addModal = Modal.create(AddItemPage);

    addModal.onDismiss((item) => {

      if (item) {
        this.saveItem(item);
      }

    });

    this.nav.present(addModal);

  }

  saveItem(item) {
    this.items.push(item);
  }

  viewItem(item) {

  }

}
