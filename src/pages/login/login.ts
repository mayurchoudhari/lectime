import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
// import { AdMob } from '@ionic-native/admob';

import { HomePage } from '../home/home';

// declare var AdMob: any;

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  public user = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  LoginForm() {
    let this_ref = this;
    let alert = this.alertCtrl.create({
                  title:'Success',
                  subTitle: 'Welcome '+this.user+'!',
                  buttons: [
                    {
                      text: 'OK',
                      handler: data => {
                        this_ref.navCtrl.setRoot(HomePage, {user: this_ref.user});
                      }
                    }
                  ]
                });
    alert.present();
  }

}
