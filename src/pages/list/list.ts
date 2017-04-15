import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Entry } from '../entry/entry';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class List {

  currentItems = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.currentItems = [
      {
        lecture: "test",
        days: "sample"
      }
    ];
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad List');
  // }

  addItem() {
    this.navCtrl.popTo(Entry);
  }

  deleteItem(item: any) {
    let alert = this.alertCtrl.create({
      title:'Warning',
      subTitle: 'Delete '+item.name+'?',
      buttons: [
        {
          text: 'Yes',
          handler: data => {
            this.currentItems.splice(this.currentItems.indexOf(item),1);
          }
        },
        'No'
      ]
    });
    alert.present();
  }

  openItem(item: any) {

  }

}
