import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit, OnDestroy {

  private getCallNextClientSubcription: Subscription;
  private flagSubStatus = false;

  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
  }

  onClickMe() {
    this.getCallNextClientSubcription = this.dataService.setNextClient().subscribe(
      (data: any) => {  // Success
        this.flagSubStatus = true;
        console.log('Cliente llamado');
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
    if  ( this.flagSubStatus ) {
      this.getCallNextClientSubcription.unsubscribe();
    }
  }
}
