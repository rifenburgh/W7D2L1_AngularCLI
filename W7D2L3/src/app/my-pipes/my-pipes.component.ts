import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pipes',
  templateUrl: './my-pipes.component.html',
  styleUrls: ['./my-pipes.component.css']
})

export class MyPipesComponent implements OnInit {
  myName: string        = 'Nizar';
  myDate: Date          = new Date();
  constructor() { }

  ngOnInit() {
  }
  fluxCapacitor() {
    const changedDate   = new Date(this.myDate);
    changedDate.setDate(this.myDate.getDate() + 1);
    this.myDate         = changedDate;
  }

}
