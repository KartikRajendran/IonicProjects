import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Noodles',
      imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2OrqR82IePnrAsp1qQugo2iKk9zqJ_72Eh5RVjWqFQbRBU7medw',
      ingredients: ['Water', 'Dried Noodles', 'Masala']
    }
    ,
    {
      id: 'r2',
      title: 'Pizza',
      imageurl: 'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      ingredients: ['Flours', 'Tomatoes', 'Onion']
    }
  ];
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
      this.recipes = this.recipes.filter(recipe => {
        return recipe.id !== recipeId;
      });
  }
}
