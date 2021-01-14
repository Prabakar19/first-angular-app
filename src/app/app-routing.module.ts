import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculateComponent } from './calculate/calculate.component';
import { DummyclientComponent } from './dummyclient/dummyclient.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'calculator', component: CalculateComponent },
  { path: 'userform', component: UserFormComponent },
  { path: 'dummyapi', component: DummyclientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
