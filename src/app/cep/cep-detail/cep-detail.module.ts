import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CepDetailComponent } from './cep-detail.component';

@NgModule({
    declarations: [CepDetailComponent],
    imports: [
        RouterModule, 
        CommonModule, 
        FormsModule
    ]
 })
 
 export class CepDetailModule {
 }
 