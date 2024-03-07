import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { EditarEmpresaComponent } from './editar-empresa/editar-empresa.component';
import { VerEmpresaComponent } from './ver-empresa/ver-empresa.component';
import { AlterarEmpresaComponent } from './alterar-empresa/alterar-empresa.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    LoginComponent,
    EditarEmpresaComponent,
    VerEmpresaComponent,
    AlterarEmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    NgxMaskDirective,
    HttpClientModule
  ],
  providers: [provideNgxMask({ /* opções de cfg */ })],
  bootstrap: [AppComponent]
})
export class AppModule { }
