import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bookStoreObj:any={
  bookObj:{
      title:'',
      webSite:'',
      author:''
  } ,
  bookDataList:[]
}
  constructor() { }

  ngOnInit(): void {
  }
  saveBook(){
    this.bookStoreObj.bookDataList.push({
      title:'',
      webSite:'',
      author:'' 
    })
  }

  resetBook(){

  }

}
