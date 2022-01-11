import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlDetailsComponent } from './url-details/url-details.component';

const routes: Routes = [
  { path: '', component: UrlDetailsComponent },
  { path: 'urlDetails', component: UrlDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
