import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { HomeComponent } from './home/home.component';
import { CountryResolver } from './country.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'country/:id',
    component: CountryComponent,
    resolve: {
      countryData: CountryResolver
    }
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
