import {Component} from '@angular2/core';
import {Router} from '@angular2/router';

import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HEROES} from './mock-heroes';
import {HeroService} from './hero.service';
import {OnInit} from '@angular2/core';


@Component({
  selector: 'my-heroes',
  templateUrl:'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
  directives: [HeroDetailComponent]

})
export class HeroesComponent implements OnInit {
  public title = 'Tour of Heroes';
  public heroes : Hero[];
  selectedHero: Hero;
  onSelect(hero) { this.selectedHero = hero; }
  constructor(
    private _router: Router,
    private _heroService: HeroService) {}

  getHeroes() {
    this._heroService.getHeroes().then(heroes => {this.heroes = heroes});
  }
  ngOnInit() {
    this.getHeroes();
  }
  gotoDetail() {
    this._router.navigate(['HeroDetail',{id: this.selectedHero.id}]);
  }
}
