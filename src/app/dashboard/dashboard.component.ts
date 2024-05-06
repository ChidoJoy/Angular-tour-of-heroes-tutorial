import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroSearchComponent } from '../hero-search/hero-search.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroSearchComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  heroes: Hero[] = [];
hero: any;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      (value: Hero[]) => {
        console.log(value)
        this.heroes = value
      }
    );
  }
}
