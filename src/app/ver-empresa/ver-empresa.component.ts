import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ver-empresa',
  templateUrl: './ver-empresa.component.html',
  styleUrls: ['./ver-empresa.component.css']
})
export class VerEmpresaComponent implements OnInit {
  tipo: string = '';
  nome: string = '';
  cnpj: string = '';
  cep: string = '';
  endereco: string = '';
  bairro: string = '';
  estado: string = '';
  cidade: string = '';
  complemento: string = '';
  celular: string = '';
  nomeAdm: string = '';
  cpf: string = '';
  email: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tipo = params['tipo'];
      this.nome = params['nome'];
      this.cnpj = params['cnpj'];
      this.cep = params['cep'];
      this.endereco = params['endereco'];
      this.bairro = params['bairro'];
      this.estado = params['estado'];
      this.cidade = params['cidade'];
      this.complemento = params['complemento'];
      this.celular = params['celular'];
      this.nomeAdm = params['nomeAdm'];
      this.cpf = params['cpf'];
      this.email = params['email'];      
    });
  }
}