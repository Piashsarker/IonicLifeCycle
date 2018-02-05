import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      console.log('Platform is ready. ');

      /** The pause event emits when the native platform puts the application into
       * the background, typically when the user switches to a different application.
       * This event would emit when a Cordova app is put into the background,
       * however, it would not fire on a standard web browser.**/
      platform.pause.subscribe((result)=>{
           console.log("Platform Pause Event ")
      });

      /*The resize event emits when the native platform pulls the application
       out from the background. This event would emit when a Cordova app comes
       out from the background, however, it would not fire on a standard web browser.*/
      platform.resize.subscribe((result)=>{
        console.log('Platform Resize Event');
      });

      /*The resume event emits when the native platform pulls the application
       out from the background. This event would emit when a Cordova app comes
        out from the background, however, it would not fire on a standard web browser.   */
      platform.resume.subscribe((result)=>{
        console.log('Platform Resume Event');
      });

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
  }




}

