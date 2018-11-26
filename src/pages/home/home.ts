import { Component, OnInit,  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsApiProvider } from '../../providers/news-api/news-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {

  // https://codepen.io/joshuaward/pen/pWXrGM

  splash = true;
  tabBarElement: any;

  newsItems1;
  newsItems2;
  newsItems3;

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


  constructor(public navCtrl: NavController, private _newService: NewsApiProvider) {

    this._newService.getNews().subscribe(news => {
    this.newsItems1 = news.articles[0].title;
    this.newsItems2 = news.articles[1].title;
    this.newsItems3 = news.articles[2].title;
    console.log(this.newsItems1);
  });

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

    this.tabBarElement = document.querySelector('.tabbar');
  }

  ngOnInit() {
    
    this.setTime();
    this.setDate();
    //this.currentMonth = this.month[this.mm];
  }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
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
    
}
