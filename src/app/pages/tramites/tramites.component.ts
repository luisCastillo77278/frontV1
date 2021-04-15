import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styles: [
  ]
})
export class TramitesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  
  movermeTramite(msg: string){
    if ( msg === 'tramite1'){

    } else if( msg === 'tramite2'){

    } else if ( msg === 'tramite3'){
      this.route.navigateByUrl('tipos');
    }
  }


}
