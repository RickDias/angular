import { BeneficiarioService } from './../../services/beneficiario.service';
import { Component, OnInit }      from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  nome = "Gerson";

  beneficiarios: Array<any> = [];

  constructor( private beneficiarioService: BeneficiarioService) { }

  ngOnInit(): void {
   this.buscar();
  }

  buscar(){
    this.beneficiarioService.buscar().subscribe( dados => this.beneficiarios = dados);
  }
}
