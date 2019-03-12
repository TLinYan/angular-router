
// 路由守卫之Resolve，传参
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Product } from "../product-o/product-o.component";
import { Injectable } from "@angular/core";

// 装饰器-(注入Router)
@Injectable()
// 指定泛类-为商品信息类型
export class proResolve implements Resolve<Product>{

  // 注入路由
  constructor(private router: Router) { };

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot, ): any {
    // 如果路由有传值
    if (route.params['id']) {
      // 创建实例
      return new Product(route.params['id'], "我是你大大");
    } else {
      // 跳回
      this.router.navigate(['/home']);
    }
  }
}