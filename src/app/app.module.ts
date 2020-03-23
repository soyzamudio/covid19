import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { NgZorroAntdModule, NZ_I18N, en_US, NzTimelineComponent, NzTimelineItemComponent, NzTimelineModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ByCountryPipe } from './by-country.pipe';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AppRoutingModule } from './app-routing.module';
import { CountryComponent } from './country/country.component';
import { HomeComponent } from './home/home.component';
import { CountryResolver } from './country.resolver';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ByCountryPipe,
    CountryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgZorroAntdModule,
    FormsModule,
    BrowserAnimationsModule,
    NzGridModule,
    NzProgressModule,
    NzLayoutModule,
    NzSelectModule,
    NzTimelineModule,
    AppRoutingModule
  ],
  providers: [ApiService, { provide: NZ_I18N, useValue: en_US }, CountryResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
