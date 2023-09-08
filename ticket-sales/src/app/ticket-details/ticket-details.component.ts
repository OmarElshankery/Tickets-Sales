import { Component, OnInit } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css'],
})
export class TicketDetailsComponent implements OnInit {
  constructor() {}
  faPenToSquare = faPenToSquare;

  ngOnInit(): void {}

  onEditClick(): void {
    // Add your logic here to handle the "Edit" button click
    // For example, you can open a modal or navigate to an edit page.
    console.log('Edit button clicked');
  }
}
