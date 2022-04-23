import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './views/contato/contato.component';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { JogadorComponent } from './views/jogador/jogador.component';
import { LoginComponent } from './views/login/login.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "contato" , component: ContatoComponent},
  {path: "jogador", component: JogadorComponent},
  {path: "login" , component: LoginComponent},
  {path: "header" , component: HeaderComponent},
  {path: "footer" , component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
