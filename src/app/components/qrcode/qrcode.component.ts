import { Component, OnInit, OnDestroy, EventEmitter, Output, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription, interval } from 'rxjs';


@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit, OnDestroy {
  @ViewChild('qrImg') qrImg: ElementRef

  @Output() toggle = new EventEmitter<string>();

  private getQrSubcription: Subscription;
  private flagSubStatus: boolean = false;

  public qrCode: any = {};

  private temporizador: any = interval(2000);
  private dataSubcription: any = Subscription;

  constructor( private dataService: DataService,
               private renderer: Renderer2 ) { }

  ngOnInit(): void {
    this.consultarQr();
  }

  consultarQr(): void {
    this.dataSubcription = this.temporizador.subscribe(() => {
      this.flagSubStatus = true;
      this.getQrSubcription = this.dataService.getQrCode().subscribe(
        (data: any) => {  // Success
          this.toggle.emit('none');
          this.renderer.addClass(this.qrImg.nativeElement, "show-efect");
          this.qrCode = data;
        },
        (error: any) => {3
          console.log(error);
        }
      );
    });
  }

  ngOnDestroy() {
    if  ( this.flagSubStatus ) {
      this.getQrSubcription.unsubscribe();
    }
    this.dataSubcription.unsubscribe();
  }
}
