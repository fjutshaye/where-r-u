import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mainframe',
  templateUrl: './mainframe.component.html',
  styleUrls: ['./mainframe.component.css']
})
export class MainframeComponent implements OnInit {

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
  }

  postIp() {
    console.log('sending ip');
    this.httpClient.post('/api/ipgeo', {}).subscribe(data=> {
      console.log(data);
    })
  }

}
