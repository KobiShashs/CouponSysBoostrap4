import { CompanyFacadeComponent } from './components/company-facade/company-facade.component';
import { CustomerFacadeComponent } from './components/customer-facade/customer-facade.component';
import { AdminFacadeComponent } from './components/admin-facade/admin-facade.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'admin', component: AdminFacadeComponent },
  { path: 'customer', component: CustomerFacadeComponent },
  { path: 'company', component: CompanyFacadeComponent },
  { path: '', component: AdminFacadeComponent, pathMatch: 'full' },
  { path: '**', component: AdminFacadeComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
