import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CepService } from '../cep.service';

@Component({
  selector: 'app-cep-list',
  templateUrl: './cep-list.component.html',
  styleUrls: ['./cep-list.component.css']
})
export class CepListComponent implements OnInit, OnDestroy {
  ceps: any[] = []
  subscription: Subscription

  @Output() feedback = new EventEmitter<string>();

  constructor(private cepService: CepService) {}

  ngOnInit() {
    // carrega dados do storage se tiver
    this.ceps = JSON.parse(localStorage.getItem('ceps'))
    if (this.ceps == null) {
      this.ceps = []
    }
  }

  pesquisarNaLista(pesquisa) {
    this.feedback.emit("Enviando Requisição...")
    this.subscription = this.cepService.getCep(pesquisa).subscribe(res => {
      if(res) {
        // adiona na lista
        this.ceps.push(res)
        
        // salva no storage
        localStorage.setItem('ceps', JSON.stringify(this.ceps))
    
        this.feedback.emit("Dado encontrado e salvo em storage!")
      } else {
        this.feedback.emit("Não foi possível encontrar dados para este CEP")
      }  
    }, error => {
      this.feedback.emit("Não foi possível encontrar dados para este CEP")
      console.error('error: ', error)
    });
  }

  removeIten(cep) {
    // remove da lista
    this.ceps = this.ceps.filter(elem => elem != cep)
    
    // atualiza no storage
    localStorage.setItem('ceps', JSON.stringify(this.ceps))
  }

  ngOnDestroy() {
    if (this.subscription)
      this.subscription.unsubscribe()
  }

}
