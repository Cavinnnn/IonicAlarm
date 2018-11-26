import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable()
export class NewsApiProvider {

  private newsUrl = 'https://newsapi.org/v2/top-headlines?country=ie&apiKey=21d3a781471842f595b6e41eb08c4b93&pageSize=10';

  constructor(public http: HttpClient) {
    
  }

  getNews() {
    return this.http.get(this.newsUrl).pipe(
    tap((res: any) => res));
  }

}
