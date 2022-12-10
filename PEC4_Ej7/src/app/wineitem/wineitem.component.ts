import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Wine } from '../models/wine';
import { WineQuantityChange } from '../interfaces/wine-quantity-change';

@Component({
  selector: 'app-wineitem',
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.css']
})
export class WineitemComponent{
  
  public wineClasses;
  public wineQuantity: WineQuantityChange;
  public serieNumerica: Array<number>;
  public total: number;
  @Input() wine: Wine;
  @Output() addEvento = new EventEmitter<WineQuantityChange>
  @Output() substractEvento = new EventEmitter<WineQuantityChange>

  constructor(){
    this.wineQuantity = {
      id: 0,
      quantity: 0
    }

    this.wine = {
      id: 0,
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
      this.wineQuantity.id = this.wine.id;
      this.addEvento.emit(this.wineQuantity);
  }
  subtractQuantity(){
      this.wineQuantity.id = this.wine.id;
      this.substractEvento.emit(this.wineQuantity);
  }
  updateQuantityInCard(c: Event){
    if(this.wine) this.wine.quantityInCart = Number(c);
    this.total = this.wine.quantityInCart * this.wine.price;
  }
  
}
