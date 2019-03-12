
// 路由守卫之CanDeactivate，离开某路由时
import { CanDeactivate } from "@angular/router";
import { ProductComponent } from "../product/product.component";

// 指定泛类-为守卫模块控制器
export class outGuard implements CanDeactivate<ProductComponent> {
  canDeactivate(component: ProductComponent) {
    return window.confirm("路由守卫之离开吗？")
  }
}