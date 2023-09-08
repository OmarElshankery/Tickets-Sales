import { Component, OnInit } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ticket-sales',
  templateUrl: './ticket-sales.component.html',
  styleUrls: ['./ticket-sales.component.css'],
})
export class TicketSalesComponent implements OnInit {
  users: any;
  constructor(private UserService: UserService) {}
  faDownload = faDownload;

  ngOnInit(): void {
    this.UserService.getAllUsers().subscribe((response) => {
      this.users = response;
    });
  }

  onEditClick(): void {
    console.log('Edit button clicked');
  }
}
