import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ByCountryPipe } from './by-country.pipe';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ByCountryPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgZorroAntdModule,
    FormsModule,
    BrowserAnimationsModule,
    NzGridModule,
    NzProgressModule,
    NzLayoutModule
  ],
  providers: [ApiService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
