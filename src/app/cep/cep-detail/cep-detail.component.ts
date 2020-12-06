import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { CepService } from '../cep.service';
import { Cep } from '../cep';

@Component({
  selector: 'app-cep-detail',
  templateUrl: './cep-detail.component.html',
  styleUrls: ['./cep-detail.component.css']
})
export class CepDetailComponent implements OnInit {
  cep$: Observable<Cep>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CepService
  ) {}


  ngOnInit() {
    this.cep$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCep(params.get('id')))
    );
  }

  gotoCeps(cep: Cep) {
    const cepId = cep ? cep.id : null;
    this.router.navigate(['/ceps', { id: cepId, foo: 'foo' }]);
  }
}
