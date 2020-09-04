import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-yourturn',
  templateUrl: './yourturn.component.html',
  styleUrls: ['./yourturn.component.css']
})
export class YourturnComponent implements OnInit, OnDestroy {
  @ViewChild('nuDiv') nuDiv: ElementRef;

  @Input() sec: string; // decoro la propiedad con @Input()

  public nroMsj: any = {};

  private getTurnSubscription: Subscription;
  private flagSubStatus = false;

  constructor( private dataService: DataService,
               private renderer: Renderer2 ) { }

  ngOnInit(): void {
    this.consultarSec();
  }

  consultarSec(): void {
    this.getTurnSubscription = this.dataService.getTurn(this.sec).subscribe(
      (data: any) => {  // Success
        this.renderer.addClass(this.nuDiv.nativeElement, 'show-efect');
        this.nroMsj = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
    if  ( this.flagSubStatus ) {
      this.getTurnSubscription.unsubscribe();
    }
  }
}
