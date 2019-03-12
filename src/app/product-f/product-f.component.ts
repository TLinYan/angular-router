import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-f',
  templateUrl: './product-f.component.html',
  styleUrls: ['./product-f.component.css']
})
export class ProductFComponent implements OnInit {

  // 私有属性
  private proId: number;

  // 注入
  constructor(private proInit: ActivatedRoute) { }

  ngOnInit() {
    this.proId = this.proInit.snapshot.data[0]['id'];
  }

}
