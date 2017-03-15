import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-property-binding',
  templateUrl: './my-property-binding.component.html',
  styleUrls: ['./my-property-binding.component.css']
})

export class MyPropertyBindingComponent implements OnInit {
  myImageSource: string = 'https://media.giphy.com/media/l3V0x6kdXUW9M4ONq/giphy.gif';

  constructor() { }

  ngOnInit() {
  }
  changeImage() {
    const randomNumber  = Math.floor((Math.random() * 10) + 200);
    this.myImageSource  = `http://loremflickr.com/300/${randomNumber}/dog`;
  }
}
