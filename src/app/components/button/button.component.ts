import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  isLoading = [false, false, false, false];

  constructor() { }

  ngOnInit(): void {
  }

  doLoading(id: number) {
    console.log("do loading");
    this.isLoading[id] = true;
    setTimeout(() => (this.isLoading[id] = false), 1000);
  }

}
