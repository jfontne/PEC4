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
  public total: number;
  @Input() wine: Wine;

  constructor(){
    this.wine = {
      name: '',
      imageUrl: '',
      price: 0,
      quantityInCart: 0,
      isOnSale: false,
      foodPairing: []
    }
    this.total = 0;
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
    this.total = this.wine.quantityInCart * this.wine.price;
  }
  subtractQuantity(){
      if(this.wine) this.wine.quantityInCart = this.wine.quantityInCart===0? 0 : this.wine.quantityInCart - 1;
      this.total = this.wine.quantityInCart * this.wine.price;
    }
  updateQuantityInCard(c: Event){
    if(this.wine) this.wine.quantityInCart = Number(c);
    this.total = this.wine.quantityInCart * this.wine.price;
  }
  
}
