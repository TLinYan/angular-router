import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // 声明传过来的数据
  private productId: number;
  private productName: string;


  constructor(private routerInit: ActivatedRoute) { }

  ngOnInit() {
    this.productId = this.routerInit.snapshot.queryParams['id'];
    this.productName = this.routerInit.snapshot.queryParams['name']
  }

}
