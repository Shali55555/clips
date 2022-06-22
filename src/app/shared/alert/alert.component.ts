import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() colour = 'blue'

  get bgColour() {
    return `bg-${this.colour}-400`
  }

  constructor() { }

  ngOnInit(): void {
  }

}
