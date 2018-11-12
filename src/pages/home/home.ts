import { Component, OnInit,  } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {

  // https://codepen.io/joshuaward/pen/pWXrGM

  todayTime;
  todayDate;
  dd;
  mm;
  month = new Array();
  currentMonth;
  yyyy;

  hours;
  minutes;
  seconds;


  constructor(public navCtrl: NavController) {
  

    this.month[1] = "January";
    this.month[2] = "February";
    this.month[3] = "March";
    this.month[4] = "April";
    this.month[5] = "May";
    this.month[6] = "June";
    this.month[7] = "July";
    this.month[8] = "August";
    this.month[9] = "September";
    this.month[10] = "October";
    this.month[11] = "November";
    this.month[12] = "December";
  }

  ngOnInit() {
    
    this.setTime();
    this.setDate();
    //this.currentMonth = this.month[this.mm];
  }

  setTime(){
    setInterval(() => {

      // this.checkTime();

      this.todayTime = new Date();
      this.hours = this.todayTime.getHours();
      this.minutes = this.todayTime.getMinutes();
      this.seconds = this.todayTime.getSeconds();
      if (this.minutes < 10){
        this.minutes = "0" + this.minutes;
      }

      if (this.seconds < 10){
        this.seconds = "0" + this.seconds;
      }
      console.log("Update");
    }, 1000);

  }

  setDate() {

    this.month[this.mm];
    this.todayDate = new Date();
    this.dd = this.todayDate.getDate();
    this.currentMonth = this.todayDate.getMonth()+1+this.month[this.mm];
    this.yyyy = this.todayDate.getFullYear();
    
  }

    items = [
      'News Item 1',
      'News Item 2',
      'News Item 3'
    ]
    
}
