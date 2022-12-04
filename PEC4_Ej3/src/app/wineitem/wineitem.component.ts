import { Component } from '@angular/core';
import { Wine } from '../models/wine';
import { Food } from '../interfaces/food';

@Component({
  selector: 'app-wineitem',
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.css']
})
export class WineitemComponent{
  wine: Wine;
  

  constructor(){
    
    let foods: Food[]= [];
    let food: Food;
    food = {
      name: 'peix al forn',
      kcal: 1000,
      gluten: false,
      vegan: false}

      foods.push(food);

      food = {
        name: "Anxoves de l'escala",
        kcal: 1000,
        gluten: false,
        vegan: false}
       
        foods.push(food);

    this.wine = new Wine('Alta Alella LAIETÀ - Gran Reserva',
                '03_alta_alella_mirgin_laieta_gran_reserva_t_21.jpg',
                20.20, false, 0, foods);
  }
  addQuantity(){
    this.wine.quantityInCart++;
  }
  subtractQuantity(){

    this.wine.quantityInCart = this.wine.quantityInCart===0? 0 : this.wine.quantityInCart - 1;
  }

}
