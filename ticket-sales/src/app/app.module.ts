import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { ChartDashboardComponent } from './chart-dashboard/chart-dashboard.component';
import { ChartModule } from 'angular-highcharts';
import { TicketSalesComponent } from './ticket-sales/ticket-sales.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TicketDetailsComponent,
    ChartDashboardComponent,
    TicketSalesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    ChartModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
