import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

heroes: string[] = ['Spiderman', 'Ironaman','Capitan America', 'Hulk', 'Thor'];
heroeBorrado: string ='';



borrarHeroe() {
  
this.heroeBorrado=  this.heroes.shift() || '';

}
}
