import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    valor;
    gerarValor(){
      this.valor = Math.round(Math.random() * 100) + 1;
    }
  
    obterEstilosParaBotao(){
  
      return{
        backgroundColor: '#eee6ff',
        padding: '8px',
        width: '10%',
        border: 'none',
        borderRadius: '4px',
        marginTop: '12px'
      }
    }
  
    obterClassesRodape(){
      return ['rodape'];
    }
  
    obterClassesValor(){
      if(this.valor%2 == 0){
        return ['numero-par'];
      }
      else{
        return ['numero-impar'];
      }
    }
    
    }
  
  
  
  





