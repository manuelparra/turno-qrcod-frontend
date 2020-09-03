import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-yourturn',
  templateUrl: './yourturn.component.html',
  styleUrls: ['./yourturn.component.css']
})
export class YourturnComponent implements OnInit {

  @Input() sec: string; // decoro la propiedad con @Input()
  @Output() toggle = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
    this.consultarSec();
  }

  private consultarSec(): void {
    setTimeout(function() {

    }, 2000);
  }

}
