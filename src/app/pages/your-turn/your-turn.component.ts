import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-your-turn',
  templateUrl: './your-turn.component.html',
  styleUrls: ['./your-turn.component.css']
})
export class YourTurnComponent implements OnInit {

  public currentSecuence = '';

  constructor( private  route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.currentSecuence = this.route.snapshot.paramMap.get('sec');
  }
}
