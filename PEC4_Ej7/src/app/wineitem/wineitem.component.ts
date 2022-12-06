import { Component, Input } from '@angular/core';
import { Wine } from '../models/wine';
@Component({
  selector: 'app-wineitem',
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.css']
})
export class WineitemComponent{
  
  public wineClasses;
  public serieNumerica: Array<number>;
  @Input() wine: Wine | null=null;

  constructor(){    
    let enVenta: boolean;
    console.log(this.wine?.isOnSale);
    if(this.wine) {enVenta = this.wine.isOnSale;}
    else {enVenta = false;}
    console.log(enVenta);
    this.serieNumerica = [];
    this.serieNumerica = Array(20).fill(0).map((x,index) => index); 
    this.wineClasses = {
      enVenda: enVenta,
      noDisponible: !enVenta
    }

    // let foods: Food[]= [];
    // foods = [
    //   {
    //   name: 'peix al forn',
    //   kcal: 1000,
    //   gluten: false,
    //   vegan: false}
    //   ,
    //   {
    //     name: "Anxoves de l'escala",
    //     kcal: 1000,
    //     gluten: false,
    //     vegan: false}
    //   ]

    // this.wine = new Wine('Alta Alella LAIETÀ - Gran Reserva',
    //             '03_alta_alella_mirgin_laieta_gran_reserva_t_21.jpg',
    //             20.20, true, 0, foods);

    // Aquí configurem l'atribut que anirà vinculat als conficionals
    // de les diferents classes  
    
    //Donem d'alta un array de 20 posicions i anem omplint-la amb l'index
    //de la posició amb map.
     
  }
  addQuantity(){
    if(this.wine) this.wine.quantityInCart++;
  }
  subtractQuantity(){

    if(this.wine) this.wine.quantityInCart = this.wine.quantityInCart===0? 0 : this.wine.quantityInCart - 1;
  }
  updateQuantityInCard(c: Event){
    if(this.wine) this.wine.quantityInCart = Number(c);
    console.log(c);
  }

}
