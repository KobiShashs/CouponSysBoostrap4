import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminFacadeComponent } from './components/admin-facade/admin-facade.component';
import { CustomerFacadeComponent } from './components/customer-facade/customer-facade.component';
import { CompanyFacadeComponent } from './components/company-facade/company-facade.component';

import { HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AdminFacadeComponent,
    CustomerFacadeComponent,
    CompanyFacadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
