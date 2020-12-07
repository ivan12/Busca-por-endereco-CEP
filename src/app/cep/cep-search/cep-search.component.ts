import { Component } from '@angular/core';

@Component({
  selector: 'app-cep-search',
  templateUrl: './cep-search.component.html',
  styleUrls: ['./cep-search.component.css']
})
export class CepSearchComponent {
  cepPesquisa: string;
  feedbackPesquisa: string = ""

  constructor() {}

  setFeedback(e) {
    console.log('setFeedback e = ', e)
    this.feedbackPesquisa = e
  }

  cleanFeedback() {
    this.feedbackPesquisa = undefined
  }

  trim(strTexto)
  {
    return strTexto.replace(/^s+|s+$/g, '');
  }

  verificaCEP(strCEP)
  {
    var objER_NUM = /^[0-9]{8}$/;
    if (strCEP) {
      strCEP = this.trim(strCEP)
    }
    if(strCEP && strCEP.length > 0) {
      strCEP = strCEP.replace(/[^\d]+/g,'')
      this.cepPesquisa = strCEP
      if(objER_NUM.test(strCEP)) {
        this.feedbackPesquisa = "Cep Valido!"
        return true;
      } else {
        this.feedbackPesquisa = "Cep Invalido!"
        return false;
      }
    } else {
      this.feedbackPesquisa = "Cep Vazio!"
      return false;
    }
  }

}
