import { CocktailService } from './../cocktail.service';
import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../models/cocktail';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  public cocktails: Cocktail[];
  private service: CocktailService;

  constructor( param_data:CocktailService ) {
    this.service = param_data;
  }

  public ngOnInit(): void {
    this.service.getCocktails().subscribe(
     (param_data:any) => {
       this.cocktails = param_data;
     }
     );
  }

 }

