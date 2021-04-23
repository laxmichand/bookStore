import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { LoaderService } from '../loader/loader.service';

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
  constructor(
    private service: AppService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.loaderService.show(true);
    this.resetBook();
    this.getAllbooks();
  }

  getAllbooks() {
    this.loaderService.show(true);
    this.service.getAllBooks().subscribe((res) => {
      this.bookStoreObj.bookDataList = res;
      this.loaderService.show(false);
    });
  }

  saveBook() {
    this.loaderService.show(true);
    let query = {
      data: {
        title: this.bookStoreObj.bookObj.title,
        webSite: this.bookStoreObj.bookObj.webSite,
        author: this.bookStoreObj.bookObj.author,
      },
      updateCriteria: { id: this.bookStoreObj.bookObj.id },
    };
    this.service.saveBooks(query).subscribe(
      (data: any) => {
        this.getAllbooks();
        this.resetBook();
      },
      (error) => {
        this.loaderService.show(false);
        console.log('error', error);
      }
    );
  }

  resetBook() {
    this.bookStoreObj.bookObj = {
      title: '',
      webSite: '',
      author: '',
      id: '',
    };
  }

  operation(row: any, action: any) {
    this.loaderService.show(true);
    this.resetBook();
    if (action === 'edit') {
      this.bookStoreObj.bookObj = {
        title: row.title,
        webSite: row.webSite,
        author: row.author,
        id: row._id,
      };
      this.loaderService.show(false);
    }
    if (action === 'delete') {
      this.service.deletedbyId(row._id).subscribe(
        (data) => {
          this.getAllbooks();
          this.loaderService.show(false);
        },
        (error) => {
          this.loaderService.show(false);
          console.log('error', error);
        }
      );
    }
  }
}
