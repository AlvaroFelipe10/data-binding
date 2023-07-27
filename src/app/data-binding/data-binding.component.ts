import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=740&t=st=1690397855~exp=1690398455~hmac=0dea7e30af3996ee4f606b73c7abe8e49c9224f6f67be3fdfa93d2c6c36a6b13';

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  constructor(){}

  ngOnInit(): void {

  }

}
