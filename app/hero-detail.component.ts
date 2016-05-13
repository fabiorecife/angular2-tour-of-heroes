import {Component, OnInit} from '@angular/core';
import { OnActivate, Router, RouteSegment } from '@angular/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';


@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent {
  hero:Hero;
  constructor(
    private _heroService: HeroService,
    private router: Router
  ) {

  }
  routerOnActivate(curr: RouteSegment): void {
    let id = +curr.getParam('id');
    this._heroService.getHero(id).then(hero => this.hero = hero);
  }
  gotoHeroes() {
    // Like <a [routerLink]="['/heroes']">Heroes</a>
    this.router.navigate(['/heroes']);
  }
  goBack() {
   window.history.back();
  } 
}
