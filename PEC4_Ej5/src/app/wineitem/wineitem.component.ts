import { Component } from '@angular/core';
import { Wine } from '../models/wine';
import { Food } from '../interfaces/food';

@Component({
  selector: 'app-wineitem',
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.css']
})
export class WineitemComponent{
  public wine: Wine;
  public wineClasses;
  public serieNumerica: Array<number>;

  constructor(){
    this.serieNumerica = [];
    let foods: Food[]= [];
    let food: Food;
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

    this.wine = new Wine('Alta Alella LAIETÀ - Gran Reserva',
                '03_alta_alella_mirgin_laieta_gran_reserva_t_21.jpg',
                20.20, true, 0, foods);
    // Aquí configurem l'atribut que anirà vinculat als conficionals
    // de les diferents classes  
    this.wineClasses = {
        enVenda: this.wine.isOnSale,
        noDisponible: !this.wine.isOnSale
      }

    //Donem d'alta un array de 20 posicions i anem omplint-la amb l'index
    //de la posició amb map.
    this.serieNumerica = Array(20).fill(0).map((x,index) => index);  
  }
  addQuantity(){
    this.wine.quantityInCart++;
  }
  subtractQuantity(){

    this.wine.quantityInCart = this.wine.quantityInCart===0? 0 : this.wine.quantityInCart - 1;
  }
  updateQuantityInCard(c: Event){
    this.wine.quantityInCart = Number(c);
    console.log(c);
  }

}
