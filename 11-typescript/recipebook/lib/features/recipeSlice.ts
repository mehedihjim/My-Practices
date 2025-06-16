import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../types/recipe";

interface RecipeState {
  favoriteRecipes: Recipe[];
}

const initialState: RecipeState = {
  favoriteRecipes: [],
};

export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<Recipe>) {
      const index = state.favoriteRecipes.findIndex(
        (r) => r.id === action.payload.id
      );
      if (index !== -1) {
        // Remove from favorites
        state.favoriteRecipes.splice(index, 1);
      } else {
        // Add to favorites
        state.favoriteRecipes.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleFavorite } = recipeSlice.actions;

export default recipeSlice.reducer;
