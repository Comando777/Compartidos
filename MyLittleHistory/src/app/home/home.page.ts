import { Component } from '@angular/core';
import {  Router  } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  navigateToproyectos(){
    this.router.navigate(['/proyectos']);
  }

}
