import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CepListComponent } from '../cep-list/cep-list.component';
import { CepSearchComponent } from './cep-search.component';

@NgModule({
    declarations: [CepSearchComponent, CepListComponent],
    imports: [
        RouterModule, 
        CommonModule, 
        FormsModule
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
 })
 
 export class CepSearchModule {
 }
 