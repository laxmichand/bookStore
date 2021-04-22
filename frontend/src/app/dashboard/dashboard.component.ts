import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  bookStoreObj: any = {
    bookObj: {
      title: '',
      webSite: '',
      author: '',
    },
    bookDataList: [],
  };
  constructor(private service: AppService) {}

  ngOnInit(): void {}
  saveBook() {
    let req = {
      title: this.bookStoreObj.bookObj.title,
      webSite: this.bookStoreObj.bookObj.webSite,
      author: this.bookStoreObj.bookObj.author,
    };

    this.service.sendGetRequest(req).subscribe(
      (data: any) => {
        this.bookStoreObj.bookDataList.push({
          title: data.title,
          webSite: data.webSite,
          author: data.author,
        });
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  resetBook() {}
}
