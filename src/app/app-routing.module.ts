import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CepListComponent } from './cep/cep-list/cep-list.component';
import { CepSearchComponent } from './cep/cep-search/cep-search.component';
import { HomeWelcomeComponent } from './home/home-welcome/home-welcome.component';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeWelcomeComponent, data: { animation: 'ceps' }
  },
  { 
    path: 'ceps',  
    component: CepListComponent, data: { animation: 'ceps' }
  },
  { 
    path: 'cep',  
    component: CepSearchComponent, data: { animation: 'ceps' }
  },
  {
    path: '**',
    component: HomeWelcomeComponent, data: { animation: 'ceps' }
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }