import { Component, OnInit } from '@angular/core';
import { SecaoJogos } from 'src/app/models/secao-jogos';
import { SecaoJogosService } from 'src/app/services/secao-jogos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private secaojogosService: SecaoJogosService) { }

  listaSecaoJogos = [] as SecaoJogos[]

  ngOnInit(): void {
    this.carregarSecaoJogos()
  }
  
  carregarSecaoJogos() {
    this.secaojogosService.getSecaoJogos().subscribe ( (SecaoJogosRecebidas: SecaoJogos[]) => {
      this.listaSecaoJogos = SecaoJogosRecebidas;
      console.log(this.listaSecaoJogos);
    } )
  }

}
