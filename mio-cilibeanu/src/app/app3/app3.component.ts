import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app3',
  templateUrl: './app3.component.html',
  styleUrls: ['./app3.component.css']
})
export class App3Component implements OnInit {
  quarto: string;
  constructor() {
    this.quarto = 'quarto'
   }

  ngOnInit(): void {
  }

}
