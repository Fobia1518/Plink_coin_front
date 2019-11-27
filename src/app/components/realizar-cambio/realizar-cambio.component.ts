import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';
import { getTreeControlMissingError } from '@angular/cdk/tree';
import { async } from 'q';

@Component({
  selector: 'app-realizar-cambio',
  templateUrl: './realizar-cambio.component.html',
  styleUrls: ['./realizar-cambio.component.css']
})
export class RealizarCambioComponent implements OnInit {

  public items: object = {};
  public itemsDigital: object = {};
  public fiat_currencies_: object = [];
  from_quantity: number;
  opSelectedCrypto: string = "BTC";
  opSelectedCoin: string = "USD";

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.Fiat_currency_symbols();
    this.Digital_currency_symbols();

  }

  getCoins(items: any): object {
    let arr = Object.values(items["fiat_currencies"])
    let result = arr.map(coincountry => ({id: Object.keys(coincountry)[0], value: Object.values(coincountry)[0]}))
    return result;
  }

  getCrypto(items: any): object {
    let arr = Object.values(items["digital_currencies"])
    let result = arr.map(crypto => ({id: Object.keys(crypto)[0], value: Object.values(crypto)[0]}))
    return result;
  }

  Fiat_currency_symbols(){
    this.dataService.getFiat_currency_symbols()
      .subscribe(
        data => this.items = this.getCoins(data),
        error => console.error('Error:' + error),
        () => console.log('Complete!!!')
      );
  }

  Digital_currency_symbols(){
    this.dataService.geDigital_currency_symbols()
      .subscribe(
        data => this.itemsDigital = this.getCrypto(data),
        error => console.error('Error:' + error),
        () => console.log(this.itemsDigital)
      );
  }

}
