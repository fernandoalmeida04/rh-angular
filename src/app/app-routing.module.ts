import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { LoginComponent } from './login/login.component';
import { EditarEmpresaComponent } from './editar-empresa/editar-empresa.component';
import { VerEmpresaComponent } from './ver-empresa/ver-empresa.component';
import { AlterarEmpresaComponent } from './alterar-empresa/alterar-empresa.component';

const routes: Routes = [
  {path: "telaInicial", component: TelaInicialComponent},
  {path: "login", component: LoginComponent},
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "editarEmpresa", component: EditarEmpresaComponent},
  {path: "verEmpresa", component: VerEmpresaComponent},
  {path: "alterarEmpresa", component: AlterarEmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
