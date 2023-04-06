import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', "This is a test", "https://www.acouplecooks.com/wp-content/uploads/2021/03/Cheese-Tortellini-011.jpg"),
    new Recipe('A Test Recipe', "This is a test", "https://www.acouplecooks.com/wp-content/uploads/2021/03/Cheese-Tortellini-011.jpg"),
    new Recipe('A Test Recipe', "This is a test", "https://www.acouplecooks.com/wp-content/uploads/2021/03/Cheese-Tortellini-011.jpg")
  ];
  
  constructor(){

  }
  ngOnInit(){
    
  }
}
