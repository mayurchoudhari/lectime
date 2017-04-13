import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentItems = [];
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    this.currentItems = [
      {
        name: "test",
        about: "sample"
      }
    ];
  }

  addItem() {
    this.currentItems.push({
      name: "new",
      about: "inserted"
    });
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
