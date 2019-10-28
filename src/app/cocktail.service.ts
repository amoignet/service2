import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators"
import { Cocktail } from './models/cocktail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
 private service : HttpClient;

  constructor(private param_data: HttpClient) {
      this.service = param_data;
  }

  getCocktails(): Observable<Cocktail[]> {
    const  obs1:Observable<any> = this.service.get("assets/cocktails.json");
    const  treatment  = ( param_data:any) => {
        return  param_data as any;
    };

    return  obs1.pipe( map( treatment) );
}
  }


