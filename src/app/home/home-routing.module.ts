import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUrlComponent } from './add-url/add-url.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: AddUrlComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
