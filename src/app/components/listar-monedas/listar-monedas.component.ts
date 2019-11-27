import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';
// import { ListaClass } from 'src/app/class/model-crypto';

@Component({
  selector: 'app-listar-monedas',
  templateUrl: './listar-monedas.component.html',
  styleUrls: ['./listar-monedas.component.sass']
})

export class ListarMonedasComponent implements OnInit {

  public monedas: object = {};

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPrices()
      .subscribe(
        data => this.monedas = data,
        error => console.error('Error:' + error),
        () => console.log(this.monedas)
      );
  }

}
