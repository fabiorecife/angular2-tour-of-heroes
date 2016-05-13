import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { Routes,Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { DashboardComponent} from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

@Component ({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['/dashboard']">Dashboard</a>
    <a [routerLink]="['/heroes']">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],

  directives: [ROUTER_DIRECTIVES],
  providers: [
    HeroService
  ]
})
@Routes([
  {
    path: '/heroes',
    component: HeroesComponent
  },
  {
    path: '/dashboard',

    component: DashboardComponent
  },
  {
    path: '/detail/:id',

    component: HeroDetailComponent
  }
])
export class AppComponent {
  title = 'Tour of Heroes';
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/dashboard']);
  }
}
