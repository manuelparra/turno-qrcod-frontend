import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
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
}
