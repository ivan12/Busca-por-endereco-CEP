import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeWelcomeComponent } from './home-welcome/home-welcome.component';

@NgModule({
  declarations: [HomeWelcomeComponent],
  imports: [
    RouterModule, 
    CommonModule, 
    FormsModule
]
})
export class HomeModule {}


