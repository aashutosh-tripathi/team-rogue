import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products!: any[];

  constructor() { }

  ngOnInit(): void {
    this.products=[{
      name:'A220-100',
      price:'2000',
      inventoryStatus:'instock'
    },{
      name:'A220-300',
      price:'2000',
      inventoryStatus:'instock'
    },{
      name:'A318',
      price:'2000',
      inventoryStatus:'instock'
    },{
      name:'A319-neo',
      price:'2000',
      inventoryStatus:'instock'
    },{
      name:'A320-neo',
      price:'2000',
      inventoryStatus:'instock'
    },{
      name:'A321-neo',
      price:'2000',
      inventoryStatus:'instock'
    }]
  }

}
