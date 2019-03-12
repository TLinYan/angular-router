import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-t',
  templateUrl: './product-t.component.html',
  styleUrls: ['./product-t.component.css']
})
export class ProductTComponent implements OnInit {

  // 私有化属性
  private paramsId: number;

  // 注入ActivatedRoute
  constructor(private paramsInit: ActivatedRoute) { }

  ngOnInit() {
    this.paramsId = this.paramsInit.snapshot.queryParams['id'];
  }

}
