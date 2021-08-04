import { Component, OnInit }      from '@angular/core';
import { BeneficiarioService }    from './services/beneficiario.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  nome = "Gerson";

  beneficiarios: Array<any>;

  constructor( private beneficiarioService: BeneficiarioService) { }

  ngOnInit(): void {
  }

  listar(){
    this.beneficiarioService.listar().subscribe( );
  }
}
