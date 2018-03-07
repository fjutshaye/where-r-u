import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ISpot, IRGI } from '../../models/record.model';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class RecordService {

  constructor(
    private httpClient: HttpClient
  ) { 
    this.records_groupby_ip$ = new Subject<IRGI[]>();
    this.records_groupby_ip = this.records_groupby_ip$.asObservable();
    this.updateRecordsByIp();
  }

  records_groupby_ip$: Subject<IRGI[]>;
  records_groupby_ip: Observable<IRGI[]>;

  // GET Records from server
  public updateRecordsByIp() {
    this.httpClient.get('/api/records/ip').subscribe(
      records => {
        let irgi: IRGI[];
        irgi = records['records'];
        this.records_groupby_ip$.next(irgi);;
      }
    );
  }

}
