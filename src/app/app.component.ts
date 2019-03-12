import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // 注入路由
  constructor(private router: Router) { };

  title = 'Router';

  // js控制跳转路由
  goRouter() {
    this.router.navigate(['/scv']);
  };
}
