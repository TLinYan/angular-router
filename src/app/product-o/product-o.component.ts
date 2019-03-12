import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-o',
  templateUrl: './product-o.component.html',
  styleUrls: ['./product-o.component.css']
})
export class ProductOComponent implements OnInit {

  // 私有属性
  private proId: number;
  private proName: number;

  // 注入
  constructor(private proinit: ActivatedRoute) { }

  ngOnInit() {
    // 订阅data
    this.proinit.data.subscribe((data: { product: Product }) => {
      this.proId = data.product.id;
      this.proName = data.product.name;
    })
  }

}
// 定义路由守卫传值使用的类
export class Product {
  constructor(public id: number, public name: string) { };
}
