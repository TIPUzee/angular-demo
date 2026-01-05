import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { NameProbabilitiesComponent } from './name-probabilities/name-probabilities.component'
import { AllUsersComponent } from './all-users/all-users.component'

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'name-probabilities', component: NameProbabilitiesComponent,
  },
  {
    path: 'all-users', component: AllUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
