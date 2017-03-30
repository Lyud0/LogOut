import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import {BackandService} from  '../providers/backandService'

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, private backandService:BackandService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      backandService.setIsMobile(platform.is('mobile'));
      backandService.setAppName('todoantony');
      backandService.setSignUpToken('5a07abea-7330-4667-a238-72a5614b0565');
      backandService.setAnonymousToken('2250c876-290d-4d56-91bd-5950c7e6d5db');
    });
  }
}
