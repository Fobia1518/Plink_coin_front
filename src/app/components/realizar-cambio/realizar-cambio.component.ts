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

  public items: object = [];
  public itemsDigital: object = [];
  public itemsConvert: object = [];
  from_quantity_input: number;
  to_quantity_input: number;
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

  ConvertItems(items: any): number {
    let result = items["to_quantity"]
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
    this.dataService.getDigital_currency_symbols()
      .subscribe(
        data => this.itemsDigital = this.getCrypto(data),
        error => console.error('Error:' + error),
        () => console.log(this.itemsDigital)
      );
  }

  Convert(){
    let cant, cryp, coin;
    cant = this.from_quantity_input;
    cryp = this.opSelectedCrypto;
    coin = this.opSelectedCoin;
    this.dataService.getConvert(cant, cryp, coin)
      .subscribe(
        data => this.to_quantity_input = this.ConvertItems(data),
        error => console.error('Error:' + error),
        () => console.log(this.to_quantity_input)
      );
  }
}
