
// 守卫路由之CanActivate，导航到某路由时
import { CanActivate } from "@angular/router";

export class enterGuard implements CanActivate {
  canActivate() {
    // 随机模拟登录状态
    let loginId: boolean = Math.random() > 0.5;
    // 未登录状态
    if (!loginId) {
      window.alert('路由守卫之条件进入某路由时,未登录');
    }
    // 登录状态
    return loginId;
  }
}