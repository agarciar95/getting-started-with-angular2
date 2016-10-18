import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector:'my-hero-detail',
    template:`
    <div *ngIf="hero">
        <h2>{{hero.nombre}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.nombre" placeholder="nombre">
        </div>
    </div>
    `
})

export class HeroDetailComponent{
    @Input()
    hero = Hero;
}