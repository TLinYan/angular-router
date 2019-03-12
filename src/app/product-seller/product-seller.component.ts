import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-seller',
  templateUrl: './product-seller.component.html',
  styleUrls: ['./product-seller.component.css']
})
export class ProductSellerComponent implements OnInit {

  // 私有化属性
  private sellerId: number;

  // 注入
  constructor(private routerInit: ActivatedRoute) { }

  ngOnInit() {
    // 三种方式路由传参
    // this.sellerId = this.routerInit.snapshot.data[0]['id'];
    // this.sellerId = this.routerInit.snapshot.params['id'];
    this.sellerId = this.routerInit.snapshot.queryParams['id'];
  }

}
