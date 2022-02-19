import { Component, OnInit } from '@angular/core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Social';

  house = faHouse;
  

  ngOnInit(): void {
  
  }
}
