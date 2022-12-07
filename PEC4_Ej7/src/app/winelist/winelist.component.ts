import { Component } from '@angular/core';
import { Wine } from '../models/wine';
import { Food } from '../interfaces/food';

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.css']
})
export class WinelistComponent {
  public winelist: Wine[];


  constructor(){
  let foods: Food[]= [];
    foods = [
      {
      name: 'peix al forn',
      kcal: 1000,
      gluten: false,
      vegan: false}
      ,
      {
        name: "Anxoves de l'escala",
        kcal: 1000,
        gluten: false,
        vegan: false}
      ]  
      this.winelist = [
      new Wine('Alta Alella LAIETÀ Gran Reserva','03_alta_alella_mirgin_laieta_gran_reserva_t_21.jpg',20.20,true,0,foods),
      new Wine('Alta Alella LAIETÀ Rosé Gran Reserva','04_alta_alella_mirgin_laieta_rose_gran_reserva_t_22.jpg',21.85,true,0,foods),
      new Wine('Alta Alella MIRGIN Gran Reserva','02_alta_alella_mirgin_gran_reserva_elaborador_t.jpg',12.95,false,0,foods),
      new Wine('Alta Alella MIRGIN OPUS Paratge','05_alta_alella_mirgin_opus_paratge_qualificat_vallcirera_t_22.jpg',32.00,true,0,foods)
    ]
  }
}
