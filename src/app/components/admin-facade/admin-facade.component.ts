import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-facade',
  templateUrl: './admin-facade.component.html',
  styleUrls: ['./admin-facade.component.css']
})
export class AdminFacadeComponent implements OnInit {

  public companies: any;
  public constructor(private adminService: AdminService) { }

  ngOnInit(): void {

    this.adminService.getAllCompanies().subscribe(
      (res) => { this.companies = res; },
      (err) => {alert(err.message); }
      );

  }

}
