import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-secuence',
  templateUrl: './secuence.component.html',
  styleUrls: ['./secuence.component.css']
})
export class SecuenceComponent implements OnInit {
  @ViewChild('esDiv') esDiv: ElementRef;

  public loadStatus = 'none';

  private getNextSecSubcription: Subscription;
  private flagSubStatus = false;

  public dataSequence: any = {};

  private temporizador: any = interval(2000);
  private dataSubcription: any = Subscription;

  constructor( private dataService: DataService,
               private renderer: Renderer2 ) { }

  ngOnInit(): void {
    this.checkSequences();
  }

  checkSequences(): void {
    this.dataSubcription = this.temporizador.subscribe(() => {
      this.flagSubStatus = true;
      this.getNextSecSubcription = this.dataService.getNextSequence().subscribe(
        (data: any) => { // Seccess
          this.renderer.addClass(this.esDiv.nativeElement, 'waiting');
          this.loadStatus = 'block';
          this.dataSequence = data;
        },
        (error: any) => {
          console.log(error);
        }
      );
    });
  }

}
