import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMob } from '@ionic-native/admob';

// import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Login;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private admob: AdMob) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.admob.createBanner({
        adId: "ca-app-pub-1187862164298228/1793914594",
        position: this.admob.AD_POSITION.BOTTOM_CENTER,
        isTesting: true,
        autoShow: true
      });
      this.admob.showBanner(this.admob.AD_POSITION.BOTTOM_CENTER);
    });

    platform.resume.subscribe(() => {
      this.admob.showBanner(this.admob.AD_POSITION.BOTTOM_CENTER);
    })
  }
}

