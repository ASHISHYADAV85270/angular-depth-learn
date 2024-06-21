import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  gmailId = '';
  userFirstName = '';
  userLastName = '';
  constructor() {}
  handleGmailUpdate(e: string) {
    this.gmailId = e;
  }
  handleFirstInputChange(e: any) {
    this.userFirstName = e.target.value;
  }
  handleSecondInputChange(e: any) {
    this.userLastName = e.target.value;
  }
  ngOnInit(): void {}
}
