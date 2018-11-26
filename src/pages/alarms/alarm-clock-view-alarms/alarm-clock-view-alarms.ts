import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-alarm-clock-view-alarms',
  templateUrl: 'alarm-clock-view-alarms.html',
})

export class AlarmsPage {

  public event = {
    timeStarts: '07:43'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 
}
