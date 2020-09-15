import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const endpoint = 'https://apiturno.papiro.es/api/v1'; // 'http://10.0.0.2:3000/api/v1'; 'https://apiturno.papiro.es/api/v1';

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
