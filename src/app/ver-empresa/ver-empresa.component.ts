import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-empresa',
  templateUrl: './ver-empresa.component.html',
  styleUrls: ['./ver-empresa.component.css']
})
export class VerEmpresaComponent implements OnInit {
  router: Router;
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

  constructor(private route: ActivatedRoute, router: Router) {this.router = router; }

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

  passInfos(){
    this.router.navigate(['/alterarEmpresa', {
      tipo: (document.getElementById('tipoEmpresa') as HTMLInputElement).value,
      nome: (document.getElementById('nomeEmpresa') as HTMLInputElement).value,
      cnpj: (document.getElementById('CNPJempresa') as HTMLInputElement).value,
      cep: (document.getElementById('cepEmpresa') as HTMLInputElement).value,
      endereco: (document.getElementById('enderecoEmpresa') as HTMLInputElement).value,
      bairro: (document.getElementById('bairroEmpresa') as HTMLInputElement).value,
      estado: (document.getElementById('estadoEmpresa') as HTMLInputElement).value,
      cidade: (document.getElementById('cidadeEmpresa') as HTMLInputElement).value,
      complemento: (document.getElementById('complementoEmpresa') as HTMLInputElement).value,
      celular: (document.getElementById('celularAdmin') as HTMLInputElement).value,
      nomeAdm: (document.getElementById('nomeAdmin') as HTMLInputElement).value,
      cpf: (document.getElementById('cpfAdmin') as HTMLInputElement).value,
      email: (document.getElementById('emailAdmin') as HTMLInputElement).value,
    }]);
  }
}