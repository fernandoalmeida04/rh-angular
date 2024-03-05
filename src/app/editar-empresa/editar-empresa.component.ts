import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent {
  router: Router;
  constructor( router: Router){this.router = router;}

  passInfos() {
    this.router.navigate(['/verEmpresa', { 
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

  consultaCEP(cep: any){
    console.log(cep);
  }
}
