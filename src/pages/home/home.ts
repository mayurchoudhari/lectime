import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { List } from '../list/list';
import { Calender } from '../calender/calender';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root = List;
  tab2Root = Calender;

  constructor(public navCtrl: NavController) {
  }
}
