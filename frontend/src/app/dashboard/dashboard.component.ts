import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AppService } from '../app.service';
import { LoaderService } from '../shared/loader/loader.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  urlRegex = `(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?`;
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Author: new FormControl('', [Validators.required, Validators.minLength(3)]),
    webSite: new FormControl('', [
      Validators.required,
      Validators.pattern(this.urlRegex),
    ]),
  });

  get f() {
    return this.form.controls;
  }
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
    private loaderService: LoaderService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loaderService.show(true);
    this.resetBook();
    this.getAllbooks();
  }

  getAllbooks() {
    this.loaderService.show(true);
    this.service.getAllBooks().subscribe(
      (res) => {
        this.bookStoreObj.bookDataList =
          res['result'] !== undefined ? res['result'] : [];
        this.loaderService.show(false);
      },
      (err) => {
        this.toastr.error('Someting went wrong', err);
        this.loaderService.show(false);
      }
    );
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
        this.toastr.success('Record successfully saved.');
        this.resetBook();
        this.getAllbooks();
      },
      (error) => {
        this.toastr.error('Error while saving record', error);
        this.loaderService.show(false);
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
    this.form.reset();
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
      if (window.confirm('You want to delete this entry.')) {
        this.service.deletedbyId(row._id).subscribe(
          (data) => {
            this.toastr.success('Record succsessfully deleted');
            this.getAllbooks();
            this.form.reset();
            this.loaderService.show(false);
          },
          (error) => {
            this.toastr.success('Error while delete record', error);
            this.form.reset();
            this.loaderService.show(false);
          }
        );
      } else {
        this.loaderService.show(false);
      }
    }
  }
}
