import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component implements OnInit {
  name: string;
  constructor() {
   this.name = 'terzo'
   }

  ngOnInit(): void {
  }

}
