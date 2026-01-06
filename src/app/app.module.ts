import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TopMenuComponent } from './top-menu/top-menu.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { NameProbabilitiesComponent } from './name-probabilities/name-probabilities.component'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms';
import { AllUsersComponent } from './all-users/all-users.component';
import { DataCardComponent } from './all-users/data-card/data-card.component'
import { HttpClientModule } from '@angular/common/http'
import { CatsComponent } from './cats/cats.component'


@NgModule({
    declarations: [
        AppComponent,
        TopMenuComponent,
        HomeComponent,
        LoginComponent,
        NameProbabilitiesComponent,
        AllUsersComponent,
        DataCardComponent,
        CatsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
