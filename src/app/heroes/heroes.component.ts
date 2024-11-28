import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { NgFor } from '@angular/common';
import { MessageService } from '../message.service';

import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  imports: [NgFor, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  heroes: Hero[] = [];

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
