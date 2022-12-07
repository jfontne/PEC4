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
    this.wineClasses = {};    
    this.serieNumerica = [];
    this.serieNumerica = Array(20).fill(0).map((x,index) => index); 
  }

  ngOnInit(){
    let enVenta = this.wine? this.wine.isOnSale : false;
    this.wineClasses = {
      enVenda: enVenta,
      noDisponible: !enVenta
    }
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
