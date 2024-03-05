import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  router: Router;
  constructor( router: Router){this.router = router;}
  checkPassAndAccept() {
    const senha = (document.getElementById('senha') as HTMLInputElement).value;
    const confirmSenha = (document.getElementById('confirmSenha') as HTMLInputElement).value;
    const termosCheckbox = document.getElementById('termos') as HTMLInputElement;
    const textCheck = document.getElementById('termNotAccept') as HTMLInputElement;
    const textSenha = document.getElementById('passNotSame') as HTMLInputElement;
    if (senha !== confirmSenha) {
      textSenha.style.display = "block";
      setTimeout(function(){
        textSenha.style.display = "none";
      } , 3000);

    } else if (!termosCheckbox.checked) {
      textCheck.style.display = "block";
      setTimeout(function(){
        textCheck.style.display = "none";
      } , 3000);

    } else {
      console.log('Senha e confirmação de senha corretas, e termos aceitos.');
      this.router.navigate(['/telaInicial', { nome: (document.getElementById('nome') as HTMLInputElement).value,}]);
    }
  }
}
