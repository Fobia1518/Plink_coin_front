import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = "https://bravenewcoin-v1.p.rapidapi.com/";

  constructor(private httpClient: HttpClient) {   }

  httpOptions = new HttpHeaders()
    .set('x-rapidapi-key','878b3d892dmsh418fe3c9b16c26fp1ec790jsnd51f88ea4c89');

  //prices
  getPrices(): Observable<object>{
    return this.httpClient.get(
      `${this.url}/prices?coin=btc`,
      {headers: this.httpOptions}
    );
  }

  /**
   * fiat-currency-symbols
   */
  getFiat_currency_symbols(): Observable<object>{
    return this.httpClient.get(
      `${this.url}/fiat-currency-symbols`,
      {headers: this.httpOptions}
    );
  }

  /**
   * digital-currency-symbols
   */
  getDigital_currency_symbols(): Observable<object>{
    return this.httpClient.get(
      `${this.url}/digital-currency-symbols`,
      {headers: this.httpOptions}
    );
  }

  /**
   * Convert
   */
  getConvert(cant:number, cryp: string, coin: string): Observable<object>{
    return this.httpClient.get(
      `${this.url}/convert?qty=${cant}&from=${cryp}&to=${coin}`,
      {headers: this.httpOptions}
    );
  }
}
