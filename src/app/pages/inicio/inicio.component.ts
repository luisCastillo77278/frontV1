import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }


  movermeA( msg: string){
    if( msg === 'tramite'){
      this.route.navigateByUrl('/tramites')
    }
  }

}
