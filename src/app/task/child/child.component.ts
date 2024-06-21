import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  @Input() firstname = '';
  @Input() lastname = '';
  @Output() gmailid: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(): void {}

  handleClick() {
    if (!this.firstname && !this.lastname) {
      alert('Bhai Input to daal');
    } else if (!this.lastname) {
      this.gmailid.emit(`${this.firstname}@gmail.com`);
    } else if (!this.firstname) {
      this.gmailid.emit(`${this.lastname}@gmail.com`);
    } else {
      this.gmailid.emit(`${this.firstname}.${this.lastname}@gmail.com`);
    }
  }
}
