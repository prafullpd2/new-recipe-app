import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe',
      'Test recipe a simple test. qwert a quick brown box.',
      'assets/img-recipe/recipe-001.jpg'),
    new Recipe('Test Recipe',
      'Test recipe a simple test. qwert a quick brown boxqwert a quick brown box qwert a quick brown box.',
      'assets/img-recipe/recipe-001.jpg'),
    new Recipe('New Recipe',
      'Test recipe a simple test. qwert a quick brown boxqwert a quick brown box qwert a quick brown box.',
      'assets/img-recipe/recipe-001.jpg')
  ];
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
