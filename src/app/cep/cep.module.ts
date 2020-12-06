import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CepSearchModule } from './cep-search/cep-search.module';
import { CepListModule } from './cep-list/cep-list.module';
import { CepDetailModule } from './cep-detail/cep-detail.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CepSearchModule,
    CepListModule,
    CepDetailModule
  ],
  providers: [HttpClient]
})
export class CepModule {}
