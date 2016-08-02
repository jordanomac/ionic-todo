import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {Platform, ActionSheet, NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/item-detail/item-detail.html',
})
export class ItemDetailPage {

  private title;
  private description;

  constructor(public platform:Platform, public nav:NavController, private navParams:NavParams) {

    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;

  }

  //doesn't work
  presentActionSheet() {
    console.log('event fired');

    let actionSheet = ActionSheet.create({
      title: 'Task Action Sheet',
      cssClass: 'item-detail.scss',
      buttons: [
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    this.nav.present(actionSheet);
  }
}
