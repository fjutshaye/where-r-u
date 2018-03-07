import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainframeComponent } from './components/mainframe/mainframe.component';
import { RecordService } from './services/record/record.service';

import { AccordionModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    MainframeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA-omf-NNlEj7dtnlRVzBANGzN637E1Goc'
    })
  ],
  providers: [RecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
