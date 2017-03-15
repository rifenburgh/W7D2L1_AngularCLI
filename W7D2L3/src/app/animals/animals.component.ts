import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  isBlackBackground = false;
  isYellowBackground = false;
  isBig = false;
  animals: Array<Object> = [{
      id: 1,
      category: 'mammal',
      name: 'Dog'
  },{
      id: 2,
      category: 'oviparous',
      name: 'Duck'
  },{
      id: 3,
      category: 'mammal',
      name: 'Elephant'
  },{
      id: 4,
      category: 'reptile',
      name: 'Snake'
  }];
  toggleBlack() {
    this.isBlackBackground = !this.isBlackBackground;
  }
  toggleYellow() {
    this.isYellowBackground = !this.isYellowBackground;
  }
  toggleBig() {
    this.isBig = !this.isBig;
  }
  constructor() { }

  ngOnInit() {
  }

}
