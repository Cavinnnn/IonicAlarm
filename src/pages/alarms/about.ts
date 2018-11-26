import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlarmsPage } from '././alarm-clock-view-alarms/alarm-clock-view-alarms';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  // https://bitbucket.org/aspiringapps/home-alarm-and-security/src/b7677f04c2686576d05c1eecf5bd663e1473d48f/src/pages/home/home.ts?at=master&fileviewer=file-view-default
  // https://ionicframework.com/docs/native/local-notifications/


  constructor(public navCtrl: NavController) {

  }

  

  itemSelected(){
    this.navCtrl.push(AlarmsPage);
  }

}
