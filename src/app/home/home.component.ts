import { Component, OnInit } from '@angular/core';
import { faImages, faClipboard, faSquareCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = faImages;
  clipboard = faClipboard;
  check = faSquareCheck;

  constructor() { }

  ngOnInit(): void {
  }

}
