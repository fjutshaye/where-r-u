import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { RecordService } from '../../services/record/record.service';
import { IRGI } from '../../models/record.model';

@Component({
  selector: 'app-mainframe',
  templateUrl: './mainframe.component.html',
  styleUrls: ['./mainframe.component.css']
})
export class MainframeComponent implements OnInit {

  subscription: Subscription[];
  records_groupby_ip: IRGI[];
  messages: string[];

  constructor(
    private httpClient: HttpClient,
    private recordService: RecordService
  ) { 
    this.subscription = new Array<Subscription>();
    this.subscribeRecordsByIp();
    this.messages = [];
  }

  ngOnInit() {
  }

  async postIp() {
    this.messages = [];
    console.log('sending ip');
    await this.httpClient.post('/api/ipgeo', {}).subscribe(data=> {
      console.log(data);
      if(data['statusCode'] != 200) {
        // display error message
        this.messages.push(data['statusMessage']);
      }
    });
    this.recordService.updateRecordsByIp();
  }

  subscribeRecordsByIp() {
    this.subscription.push(
      this.recordService.records_groupby_ip.subscribe(
        records => {
          this.records_groupby_ip = records;
        }
      )
    )
  }

}
