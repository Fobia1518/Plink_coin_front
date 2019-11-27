import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule  } from '@angular/material';
import { CommonModule } from "@angular/common";
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRountingModule } from './app-rounting.module';
import { AppComponent } from './app.component';
import { RealizarCambioComponent } from './components/realizar-cambio/realizar-cambio.component';
import { ListarMonedasComponent } from './components/listar-monedas/listar-monedas.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DataService } from './services/data-service.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RealizarCambioComponent,
    ListarMonedasComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule, 
    AppRountingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
    ScrollingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
