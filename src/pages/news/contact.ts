import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsApiProvider } from '../../providers/news-api/news-api';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [NewsApiProvider]
})
export class ContactPage implements OnInit {

  news: any[];
  newsItems1: any[];
  newsItems2: any[];
  newsItems3: any[];
  newsItems4: any[];
  newsItems5: any[];
  newsItems6: any[];
  newsItems7: any[];
  newsItems8: any[];
  newsItems9: any[];
  newsItems10: any[];

  subscription;

  constructor(public navCtrl: NavController, private _newService: NewsApiProvider,) {

    this.subscription =this._newService.getNews().subscribe(news => {
        this.news = news.articles;
        this.newsItems1 = news.articles[0].title;
        this.newsItems2 = news.articles[1].title;
        this.newsItems3 = news.articles[2].title;
        this.newsItems4 = news.articles[3].title;
        this.newsItems5 = news.articles[4].title;
        this.newsItems6 = news.articles[5].title;
        this.newsItems7 = news.articles[6].title;
        this.newsItems8 = news.articles[7].title;
        this.newsItems9 = news.articles[8].title;
        this.newsItems10 = news.articles[9].title;
        console.log(this.news)
     });

  }

  ngOnInit() {
  }

 


  // items = [
  //   'News Item 1',
  //   'News Item 2',
  //   'News Item 3'
  // ]

}
