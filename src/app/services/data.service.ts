import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators';
import { Observable, throwError, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

const endpoint = '/api/v1';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  public getQrCode() {
    return this.http.get(endpoint + '/sequences/lastcode');
  }

  public getTurn( sec: string ) {
    return this.http.get(endpoint + '/sequences/secuence/' + sec);
  }

  public getNextSequence() {
    return this.http.get(endpoint + '/sequences/nextsequence');
  }

  public setNextClient() {
    const body = new HttpParams()
      .set('iduser', '2');

    return this.http.post(
      endpoint + '/sequences/nextclient',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }
}
