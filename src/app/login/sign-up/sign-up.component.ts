import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  @Output() showSignInEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showSignInComponent(): void {
    this.showSignInEvent.emit();
  }

}
